import { Component, OnInit } from '@angular/core';
import { MoodDetail } from 'src/app/models/MoodDetail';
import {MoodService} from 'src/app/services/mood.service';
import {ActivatedRoute} from '@angular/router';
import { Mood } from 'src/app/classes/mood';

@Component({
  selector: 'app-mood-detail',
  templateUrl: './mood-detail.component.html',
  styleUrls: ['./mood-detail.component.css']
})
export class MoodDetailComponent implements OnInit {

 mood: MoodDetail;
 
 constructor(private _activatedRoute, private _moodService: MoodService) { }
 
 ngOnInit() {
  this._activatedRoute.paramMap.subscribe(routeData => {
    this._moodService.getMood(routeData.get('id')).subscribe((singleMood: Mood) => {
      this.mood = singleMood;
    });
  });
}

}

