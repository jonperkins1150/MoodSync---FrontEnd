import { Component, OnInit } from '@angular/core';
import { GenreDetail } from 'src/app/models/GenreDetail';
import { ActivatedRoute, Router } from '@angular/router';
import { GenreService } from 'src/app/services/genre.service';

@Component({
  selector: 'app-genre-delete',
  templateUrl: './genre-delete.component.html',
  styleUrls: ['./genre-delete.component.css']
})


export class GenreDeleteComponent implements OnInit {
  genre: GenreDetail;

  constructor(private _activatedRoute: ActivatedRoute, private _genreService: GenreService, private _router: Router) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._genreService.getGenre(routeData.get('id'))
      .subscribe((singleGenre: GenreDetail) => { this.genre = singleGenre})
    });
  }


  onDelete() {
    this._genreService.deleteGenre(this.genre.GenreId).subscribe(() => {
      this._router.navigate(['/genre']);

    });
  }
  }
