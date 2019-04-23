import { Component, OnInit } from '@angular/core';
import { SongService } from 'src/app/services/song.service';
import { Router } from '@angular/router';
import { SongDetails } from 'src/app/models/SongDetails';
import { CreateSong } from 'src/app/models/CreateSong';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
  songs : {}
  tstDat: CreateSong =
  {SongName: "Raster Egg",
   Artist: "TKress22",
   Album: "The Great Easter Egg Hunt",
   GenreId: 9,
   ChildFriendly: false
  }

  constructor(private songserv: SongService,  private _router: Router) { }

  ngOnInit() {
    //console.log(this.songserv.createSong(this.tstDat).subscribe());
    this.songserv.getSong("all", "").subscribe(data => {
      this.songs = data;
      console.log(this.songs);
    });
  }
  onSubmit(){
    this.songserv.createSong(this.tstDat).subscribe(data => {
      this._router.navigate(['/song']);
    })
  }

}
