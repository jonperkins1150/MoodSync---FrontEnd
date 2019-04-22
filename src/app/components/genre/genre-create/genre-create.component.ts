import { Component, OnInit } from '@angular/core';
import { GenreService} from '../../../services/genre.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-genre-create',
  templateUrl: './genre-create.component.html',
  styleUrls: ['./genre-create.component.css']
})
export class GenreCreateComponent implements OnInit {

  genreForm: FormGroup;

  constructor(private _genreService: GenreService, private _form: FormBuilder, private _router: Router) {this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.genreForm = this._form.group({
      GenreName: new FormControl
    });
  }
  onSubmit() {
    this._genreService.createGenre(this.genreForm.value).subscribe(data => {
      this._router.navigate(['/genres']);
    })
  }
}

