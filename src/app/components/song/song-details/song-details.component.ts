import { Component, OnInit } from '@angular/core';
import { SongService } from 'src/app/services/song.service';
import { Router } from '@angular/router';
import { Song } from 'src/app/classes/song';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-song-details',
  templateUrl: './song-details.component.html',
  styleUrls: ['./song-details.component.css']
})
export class SongDetailsComponent implements OnInit {
  dataSource: MatTableDataSource<Song>;
  
  columnNames = ['SongId', 'SongName', 'Album', 'Artist', 'ChildFriendly', 'buttons'];

  songList: number[] = [];


  constructor(private songserv: SongService,  private _router: Router) { }

  ngOnInit() {
    this.songserv.getSong("all", "").subscribe((songList: Song[]) => {
      this.dataSource = new MatTableDataSource<Song>(songList)
    });
  }

  addToList(id: number){
    event.preventDefault();
    console.log(" add called");
    this.songList.push(id);
    (<HTMLInputElement>document.getElementById("SongList")).value = this.convertToText(this.songList);
  }

  deleteFromList(id: number){
    event.preventDefault();
    console.log(" del called");
    this.songList = this.removeItem(this.songList, id);
    (<HTMLInputElement>document.getElementById("SongList")).value = this.convertToText(this.songList);
  }

  convertToText(list: number[]){
    let str: string = "";
    for(let r in list){
      str += list[r] + ",";
    }
    return str.slice(0,str.length-1)
  }

  removeItem(arr, item){
    var clipped = arr;
    for (var r=0; r< clipped.length; r++){
      if(clipped[r] == item){
        clipped = this.removeAtIndex(clipped, r);
        break;
      }
    }
    return clipped;
  }
  removeAtIndex(arr, index){
    var clipped = [];
    for (var r = 0; r < arr.length; r++){
      if(r != index){
        clipped.push(arr[r]);
      }
    }
    return clipped;
  }
}