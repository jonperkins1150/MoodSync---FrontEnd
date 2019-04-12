import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genre} from '../classes/genre';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private http: HttpClient) { }
  getGenre(): Observable<any>{
    return this.http.get("https://deployedMoodSync")
  }
  }

