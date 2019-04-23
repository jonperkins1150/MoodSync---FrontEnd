import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Song } from '../classes/song';
import { Api_Url } from 'src/environments/environment.prod';
import { CreateSong } from '../models/CreateSong';
import { SongDetails } from '../models/SongDetails';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  strStub : string = "api/Song";

  constructor(private http: HttpClient) { }

  getSong(type:string, inp:string): Observable<any>{
    this.strStub += "?type=" + type + "&inp";
    if(inp != ""){
      this.strStub  += "=" + inp;
    }
    console.log("get called");
    return this.http.get(Api_Url + this.strStub, { headers: this.getHeaders() })
  }

  createSong(song: CreateSong){
    console.log("create called");
    console.log(song);
    return this.http.post(Api_Url + this.strStub, song, { headers: this.getHeaders()});
  }

  updateSong(song: SongDetails){
    console.log("details called");
    return this.http.put(Api_Url + this.strStub, song, { headers: this.getHeaders() });
  }

  deleteSong(id: number){
    console.log("delete called");
    return this.http.delete(Api_Url + this.strStub + "/" + id, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}