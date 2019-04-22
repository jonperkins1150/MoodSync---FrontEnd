import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Playlist } from 'src/app/models/Playlist';
import { PlaylistService } from 'src/app/services/playlist.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-playlist-delete',
  templateUrl: './playlist-delete.component.html',
  styleUrls: ['./playlist-delete.component.css']
})
export class PlaylistDeleteComponent implements OnInit {
  
  playlist: Playlist;

  constructor(private _playlistService: PlaylistService, private _ar: ActivatedRoute, private _router: Router) { 
  this._ar.paramMap.subscribe(p => {
    this._playlistService.getPlaylistById(p.get('id')).subscribe((singlePlaylist: Playlist) => {
      this.playlist = singlePlaylist;
    });
  });
}

  ngOnInit() {
  }

  onDelete() {
    this._playlistService.deletePlaylist(this.playlist.PlaylistId).subscribe(() => {
      this._router.navigate(['/playlist']);
    });
  }
  }

