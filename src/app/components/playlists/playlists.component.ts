import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../../services/playlist.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {
  
  playlistForm: FormGroup;
  
    constructor(private _playlistService: PlaylistService, private _form: FormBuilder, private _router: Router) { }
  
    ngOnInit() {
    this.retrievePlaylist();
     }
  retrievePlaylist(): void{
    this._playlistService.getPlaylist().subscribe(data => {
      this.playlistForm = data;
      console.log(this.retrievePlaylist);
    });
  }
  createForm(){
    this.playlistForm = this._form.group({
      PlaylistId: new FormControl,
      UserId: new FormControl,
      PlaylistName: new FormControl,
      SongList: new FormControl,
    });
  }
  onSubmit(){
  }
  }
