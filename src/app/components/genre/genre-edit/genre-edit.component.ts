import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { GenreDetail } from 'src/app/models/GenreDetail';
import { GenreService } from 'src/app/services/genre.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-genre-edit',
  templateUrl: './genre-edit.component.html',
  styleUrls: ['./genre-edit.component.css']
})
export class GenreEditComponent implements OnInit {

  genre: GenreDetail;

  editGenreForm: FormGroup;
  constructor(private _form: FormBuilder,
              private _genreService: GenreService,
              private _ar: ActivatedRoute,
              private _router: Router) { 

this._ar.paramMap.subscribe(p => {
  this._genreService.getGenre(p.get('id')).subscribe((singleGenre: GenreDetail) => {
    this.genre = singleGenre;
    this.createForm();
  });
});  
}

  ngOnInit() {
  }
createForm() {
  this.editGenreForm = this._form.group({
    GenreId: new FormControl(this.genre.GenreId),
    GenreName: new FormControl(this.genre.GenreName),

  });
}

onSubmit(GenreForm) {
  const updateGenre: GenreDetail = {
    GenreId: GenreForm.value.GenreId,
    GenreName: GenreForm.value.GenreName,
    
  };
  this._genreService.updateGenre(updateGenre).subscribe(d => {
    this._router.navigate(['/genre']);
  });
}
}
