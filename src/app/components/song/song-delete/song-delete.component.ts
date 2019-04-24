import { Component, OnInit } from '@angular/core';
import { SongDetails } from 'src/app/models/SongDetails';
import { SongService } from 'src/app/services/song.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-song-delete',
  templateUrl: './song-delete.component.html',
  styleUrls: ['./song-delete.component.css']
})
export class SongDeleteComponent implements OnInit {
  
  song: SongDetails;

  constructor(private _songService: SongService, private _ar: ActivatedRoute, private _router: Router) { 
  this._ar.paramMap.subscribe(p => {
    this._songService.getSong("string", "string").subscribe((singleSong: SongDetails) => {
      this.song = singleSong;
    });
  });
}

  ngOnInit() {
  }

  onDelete() {
    this._songService.deleteSong(this.song.SongId).subscribe(() => {
      this._router.navigate(['/song']);
    });
  }
  }

