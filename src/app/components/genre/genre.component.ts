import { Component, OnInit } from '@angular/core';
import { Genre} from '../../classes/genre';
import { GenreService } from 'src/app/services/genre.service';
import { GenreDetail } from 'src/app/models/GenreDetail';
import { MatTableDataSource } from '@angular/material';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  columnNames = [ 'GenreId', 'GenreName', 'buttons'];
  dataSource: MatTableDataSource<Genre>;

    
    constructor(private _genreService: GenreService, private _form: FormBuilder, private _router: Router) { }
 
    
    ngOnInit() {
    this._genreService.getGenres().subscribe((genre: GenreDetail[]) => {
    this.dataSource = new MatTableDataSource<GenreDetail>(genre)
  });
  }
}
