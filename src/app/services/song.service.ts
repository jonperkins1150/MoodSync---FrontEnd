import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genre} from '../classes/genre';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private http: HttpClient) { }
  getSong(): Observable<any>{
    return this.http.get("https://moodsync.azurewebsites.net/api/Song")
  }
  }