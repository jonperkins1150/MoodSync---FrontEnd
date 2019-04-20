import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../../services/playlist.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router'
import { Playlist } from '../../models/Playlist';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {
  dataSource: MatTableDataSource<Playlist>;
    
    constructor(private _playlistService: PlaylistService, private _form: FormBuilder, private _router: Router) { }
  
    columnNames = ['PlaylistId', 'UserId', 'PlaylistName', 'SongList'];
    
    ngOnInit() {
    this._playlistService.getPlaylist().subscribe((playlist: Playlist[]) => {
    this.dataSource = new MatTableDataSource<Playlist>(playlist)
  });
  }
  
  onSubmit(){
  //this._playlistService.createPlaylist(id).subscribe((playlist: Playlist[]) => {
  //   this._router.navigate(['/playlists']);
  // });
  }
}