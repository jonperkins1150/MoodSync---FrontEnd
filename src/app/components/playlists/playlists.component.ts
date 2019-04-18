import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../../services/playlist.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router'
import { Playlist } from '../../models/Playlist';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {
    
    constructor(private _playlistService: PlaylistService, private _form: FormBuilder, private _router: Router) { }
  
    ngOnInit() {
    this._playlistService.getPlaylist().subscribe((playlist: Playlist[]) => {
    });
  }
  
  onSubmit(){
  this._playlistService.createPlaylist(id).subscribe((playlist: Playlist[]) => {
    this._router.navigate(['/playlists']);
  });
  }
  }
