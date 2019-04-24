import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { SongService } from 'src/app/services/song.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SongDetails } from 'src/app/models/SongDetails';

@Component({
  selector: 'app-song-edit',
  templateUrl: './song-edit.component.html',
  styleUrls: ['./song-edit.component.css']
})

export class SongEditComponent implements OnInit {
  
  song: SongDetails;

  songForm: FormGroup;

  constructor(private _form: FormBuilder,
              private songserv: SongService,
              private _ar: ActivatedRoute,
              private _router: Router) { 

this._ar.paramMap.subscribe(p => {
  this.songserv.getSong("id", p.get('id')).subscribe((singleSong: SongDetails) => {
    this.song = singleSong;
    this.createForm();
  });
});  
}

  ngOnInit() {
  }
  createForm(){
    this.songForm = this._form.group({
      SongName: new FormControl,
      Album: new FormControl,
      Artist: new FormControl,
      GenreId: new FormControl,
      ChildFriendly: new FormControl
    });
  }
onSubmit(songForm) {
  const updateSong: SongDetails = {
    SongName: songForm.value.SongId,
    Album: songForm.value.Album,
    Artist: songForm.value.Artist,
    GenreId: songForm.value.GenreId,
    ChildFriendly: songForm.value.ChildFriendly  
  };
  this.songserv.updateSong(updateSong).subscribe(d => {
    this._router.navigate(['/song']);
  });
}
}