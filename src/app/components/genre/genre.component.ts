import { Component, OnInit } from '@angular/core';
import { Genre} from '../../classes/genre';
import { GenreService } from 'src/app/services/genre.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
genre: {}

  constructor(private data: GenreService) { }

  ngOnInit() {
  //   this.retrieveGenre();
   }
retrieveGenre(): void{
  this.data.getGenres().subscribe(data => {
    this.genre = data;
    console.log(this.genre);
  });
}
}
