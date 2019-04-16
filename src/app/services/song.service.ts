import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genre} from '../classes/genre';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private http: HttpClient) { }
  getSong(type:string, inp:string): Observable<any>{
    let str = "?type="+type+"&"+"inp="+inp;
    console.log(str);
    return this.http.get("https://moodsync.azurewebsites.net/api/Song")
  }
  }