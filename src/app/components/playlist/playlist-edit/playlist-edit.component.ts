import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Playlist } from 'src/app/models/Playlist';
import { PlaylistService } from 'src/app/services/playlist.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-playlist-edit',
  templateUrl: './playlist-edit.component.html',
  styleUrls: ['./playlist-edit.component.css']
})
export class PlaylistEditComponent implements OnInit {

  playlist: Playlist;

  editPlaylistForm: FormGroup;
  constructor(private _form: FormBuilder,
              private _playlistService: PlaylistService,
              private _ar: ActivatedRoute,
              private _router: Router) { 

this._ar.paramMap.subscribe(p => {
  this._playlistService.getPlaylistById(p.get('id')).subscribe((singlePlaylist: Playlist) => {
    this.playlist = singlePlaylist;
    this.createForm();
  });
});  
}

  ngOnInit() {
  }
createForm() {
  this.editPlaylistForm = this._form.group({
    PlaylistId: new FormControl(this.playlist.PlaylistId),
    UserId: new FormControl(this.playlist.UserId),
    PlaylistName: new FormControl(this.playlist.PlaylistName),
    SongList: new FormControl(this.playlist.SongList)
  });
}

onSubmit(form) {
  const updatePlaylist: Playlist = {
    PlaylistId: form.value.PlaylistId,
    UserId: form.value.UserId,
    PlaylistName: form.value.PlaylistName,
    SongList: form.value.SongList
  };
  this._playlistService.updatePlaylist(updatePlaylist).subscribe(d => {
    this._router.navigate(['/playlist']);
  });
}
}
