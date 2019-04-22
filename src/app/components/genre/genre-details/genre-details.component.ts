import { Component, OnInit } from '@angular/core';
import { GenreDetail } from 'src/app/models/GenreDetail';
import {GenreService} from 'src/app/services/genre.service';
import {ActivatedRoute} from '@angular/router';
import { Genre } from 'src/app/classes/genre';

@Component({
  selector: 'app-genre-details',
  templateUrl: './genre-details.component.html',
  styleUrls: ['./genre-details.component.css']
})
export class GenreDetailComponent implements OnInit {

 genre: GenreDetail;
 
 constructor(private _activatedRoute: ActivatedRoute, private _genreService: GenreService) { }
 
 ngOnInit() {
  this._activatedRoute.paramMap.subscribe(routeData => {
    this._genreService.getGenre(routeData.get('id')).subscribe((singleGenre: Genre) => {
      this.genre = singleGenre;
    });
  });
}

}

