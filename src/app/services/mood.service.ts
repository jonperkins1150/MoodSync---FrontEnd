import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Mood} from '../classes/mood';
import { getModuleFactory__POST_R3__ } from '@angular/core/src/linker/ng_module_factory_loader';
import { CreateMood } from '../models/CreateMood';
import { MoodDetail } from '../models/MoodDetail';

const ApiUrl = 'https://moodsync.azurewebsites.net/api';

@Injectable()
export class MoodService {

  constructor(private _http: HttpClient) { }

  getMoods() {
    return this._http.get(`${ApiUrl}/Mood/All`, { headers: this.getHeaders() });
  }

  getMood(id: string) {
    return this._http.get(`${ApiUrl}/Mood/Single/${id}`, { headers: this.getHeaders() });
  }

  createMood(mood: CreateMood) {
    return this._http.post(`${ApiUrl}/Mood`, mood, { headers: this.getHeaders()});
  }

  updateMood(mood: MoodDetail) {
    return this._http.put(`${ApiUrl}/Mood`, mood, { headers: this.getHeaders() });
  }

  deleteMood(id: number) {
    return this._http.delete(`${ApiUrl}/Mood/${id}`, { headers: this.getHeaders() });
  }


  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);

  }
}

