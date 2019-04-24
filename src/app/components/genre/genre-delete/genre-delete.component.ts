import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { GenreDetail } from 'src/app/models/GenreDetail';
import { ActivatedRoute, Router } from '@angular/router';
import { GenreService } from 'src/app/services/genre.service';
import { Genre } from 'src/app/classes/genre';

@Component({
  selector: 'app-genre-delete',
  templateUrl: './genre-delete.component.html',
  styleUrls: ['./genre-delete.component.css']
})


export class GenreDeleteComponent implements OnInit {
  
  genre: GenreDetail;

  constructor(private _activatedRoute: ActivatedRoute, private _genreService: GenreService, private _router: Router) { 
    this._activatedRoute.paramMap.subscribe(p => {
      this._genreService.getGenre(p.get('id')).subscribe((singleGenre: Genre) =>{
        this.genre = singleGenre;
      });
    });
  }

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
