import { Component, OnInit } from '@angular/core';
import { MoodDetail } from 'src/app/models/MoodDetail';
import {MoodService} from 'src/app/services/mood.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-mood-detail',
  templateUrl: './mood-detail.component.html',
  styleUrls: ['./mood-detail.component.css']
})
export class MoodDetailComponent implements OnInit {

  mood: MoodDetailComponent;
  constructor(private _activatedRoute, private _moodService: MoodService) { }
  ngOnInit() {
  }

}
