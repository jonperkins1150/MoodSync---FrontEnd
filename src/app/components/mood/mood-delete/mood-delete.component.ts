import { Component, OnInit } from '@angular/core';
import { MoodDetail } from 'src/app/models/MoodDetail';
import { ActivatedRoute, Router } from '@angular/router';
import { MoodService } from 'src/app/services/mood.service';

@Component({
  selector: 'app-mood-delete',
  templateUrl: './mood-delete.component.html',
  styleUrls: ['./mood-delete.component.css']
})


export class MoodDeleteComponent implements OnInit {
  mood: MoodDetail;

  constructor(private _activatedRoute: ActivatedRoute, private _moodService: MoodService, private _router: Router) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._moodService.getMood(routeData.get('id'))
      .subscribe((singleMood: MoodDetail) => { this.mood = singleMood})
    });
  }


  onDelete() {
    this._moodService.deleteMood(this.mood.MoodId).subscribe(() => {
      this._router.navigate(['/mood']);


  }

}