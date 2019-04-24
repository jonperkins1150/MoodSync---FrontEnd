import { Component, OnInit } from '@angular/core';
import { SongDetails } from 'src/app/models/SongDetails';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { SongService } from 'src/app/services/song.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-song-edit',
  templateUrl: './song-edit.component.html',
  styleUrls: ['./song-edit.component.css']
})
export class SongEditComponent implements OnInit {

  song: SongDetails;

  editSongForm: FormGroup;
  constructor(private _form: FormBuilder,
              private _songService: SongService,
              private _ar: ActivatedRoute,
              private _router: Router) { 

this._ar.paramMap.subscribe(p => {
  this._songService.getSong("string", "string").subscribe((singleSong: SongDetails) => {
    this.song = singleSong;
    this.createForm();
  });
});  
}

  ngOnInit() {
  }
createForm() {
  this.editSongForm = this._form.group({
    SongId: new FormControl(this.song.SongId),
    SongName: new FormControl(this.song.SongName),
    Artist: new FormControl(this.song.Artist),
    Album: new FormControl(this.song.Album),
    GenreId: new FormControl(this.song.GenreId),
    ChildFriendly: new FormControl(this.song.ChildFriendly)
  });
}

onSubmit(form) {
  const updateSong: SongDetails = {
    SongId: form.value.SongId,
    SongName: form.value.SongName,
    Artist: form.value.Artist,
    Album: form.value.Album,
    GenreId: form.value.GenreId,
    ChildFriendly: form.value.ChildFriendly,
  };
  this._songService.updateSong(updateSong).subscribe(d => {
    this._router.navigate(['/song']);
  });
}
}
