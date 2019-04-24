import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genre} from '../classes/genre';
import { Api_Url } from 'src/environments/environment.prod';
import { CreateGenre } from '../models/CreateGenre';
import { GenreDetail } from '../models/GenreDetail';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private _http: HttpClient) { }

  getGenres() {
    return this._http.get(`${Api_Url}api/genre`, { headers: this.getHeaders() });
  }

  getGenre(id: string) {
    return this._http.get(`${Api_Url}api/genre/${id}`, { headers: this.getHeaders() });
  }

  createGenre(genre: CreateGenre) {
    return this._http.post(`${Api_Url}api/genre`, genre, { headers: this.getHeaders()});
  }

  updateGenre(genre: GenreDetail) {
    return this._http.put(`${Api_Url}api/genre/genre-edit/`, genre, { headers: this.getHeaders() });
  }

  deleteGenre(id: number) {
    return this._http.delete(`${Api_Url}api/genre//${id}`, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
