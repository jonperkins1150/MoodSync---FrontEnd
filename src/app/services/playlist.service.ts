import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Playlist} from '../classes/playlist';
import { Api_Url } from 'src/environments/environment.prod';


@Injectable()

export class PlaylistService {

  constructor(private _http: HttpClient) { }
  
  getPlaylist() {
    return this._http.get(`${Api_Url}playlists`, {headers: this.getHeaders() });
  }

  getPlaylistById(id: string) {
    return this._http.get(`${Api_Url}playlists/${id}`, { headers: this.getHeaders() });
  }

  createPlaylist(playlist: Playlist){
    return this._http.post(`${Api_Url}playlists`, playlist, { headers: this.getHeaders()});
  }

  updatePlaylist(playlist: Playlist){
    return this._http.put(`${Api_Url}playlists`, {headers: this.getHeaders() });
  }

  deletePlaylist(id: number) {
    return this._http.delete(`${Api_Url}playlists/${id}`, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
  }