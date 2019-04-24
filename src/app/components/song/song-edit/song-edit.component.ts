import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { SongService } from 'src/app/services/song.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-song-edit',
  templateUrl: './song-edit.component.html',
  styleUrls: ['./song-edit.component.css']
})

export class SongEditComponent implements OnInit {
  songForm: FormGroup;

  constructor(private songService: SongService, private _form: FormBuilder, private _router: Router) { 
    this.createForm();
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
  onSubmit(){
    this.songService.updateSong(this.songForm.value).subscribe(data => {
      this._router.navigate(['/song']);
    });
  }
}