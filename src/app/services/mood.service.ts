import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Mood} from '../classes/mood';
import { getModuleFactory__POST_R3__ } from '@angular/core/src/linker/ng_module_factory_loader';
import { CreateMood } from '../models/CreateMood';
import { MoodDetail } from '../models/MoodDetail';
import { Api_Url } from 'src/environments/environment.prod';

@Injectable()
export class MoodService {

  constructor(private _http: HttpClient) { }

  getMoods() {
    return this._http.get(`${Api_Url}api/Mood`, { headers: this.getHeaders() });
  }

  getMood(id: string) {
    return this._http.get(`${Api_Url}api/Mood/${id}`, { headers: this.getHeaders() });
  }

  createMood(mood: CreateMood) {
    return this._http.post(`${Api_Url}api/Mood`, mood, { headers: this.getHeaders()});
  }

  updateMood(mood: MoodDetail) {
    return this._http.put(`${Api_Url}api/Mood`, mood, { headers: this.getHeaders() });
  }

  deleteMood(id: number) {
    return this._http.delete(`${Api_Url}api/Mood/${id}`, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);

  }
}


