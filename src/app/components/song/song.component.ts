import { Component, OnInit } from '@angular/core';
import { SongService } from 'src/app/services/song.service';
import { Router } from '@angular/router';
import { SongDetails } from 'src/app/models/SongDetails';
import { CreateSong } from 'src/app/models/CreateSong';
import { Song } from 'src/app/classes/song';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
  dataSource: MatTableDataSource<Song>;
  
  columnNames = ['SongId', 'SongName', 'Album', 'Artist', 'ChildFriendly', 'buttons'];


  constructor(private songserv: SongService,  private _router: Router) { }

  ngOnInit() {
    this.songserv.getSong("all", "").subscribe((songList: Song[]) => {
      this.dataSource = new MatTableDataSource<Song>(songList)
    });
  }
}