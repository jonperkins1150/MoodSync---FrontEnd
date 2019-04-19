import { Component, OnInit } from '@angular/core';
import { Mood }  from '../../classes/mood';
import { MoodService } from 'src/app/services/mood.service';

@Component({
  selector: 'app-mood',
  templateUrl: './mood.component.html',
  styleUrls: ['./mood.component.css']
})
export class MoodComponent implements OnInit {
mood: {}

  constructor(private data: MoodService) { }

  ngOnInit() {
  //   this.retrieveMood();
   }
retrieveMood(): void{
  this.data.getMoods().subscribe(data => {
    this.mood = data;
    console.log(this.mood);
  });
}
}