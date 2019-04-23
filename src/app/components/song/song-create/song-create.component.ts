import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SongService } from 'src/app/services/song.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-song-create',
  templateUrl: './song-create.component.html',
  styleUrls: ['./song-create.component.css']
})
export class SongCreateComponent implements OnInit {

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
    this.songService.createSong(this.songForm.value).subscribe(data => {
      this._router.navigate(['/song']);
    });
  }
}
