import { Component, OnInit } from '@angular/core';
import { Mood }  from '../../classes/mood';
import { MoodService } from 'src/app/services/mood.service';
import { MatTableDataSource } from '@angular/material';
import { MoodDetail } from 'src/app/models/MoodDetail';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mood',
  templateUrl: './mood.component.html',
  styleUrls: ['./mood.component.css']
})
export class MoodComponent implements OnInit {
  columnNames = ['MoodId', 'MoodName', 'buttons'];
  dataSource: MatTableDataSource<MoodDetail>;
    
    constructor(private _moodService: MoodService, private _form: FormBuilder, private _router: Router) { }
  
  
    
    ngOnInit() {
    this._moodService.getMoods().subscribe((mood: MoodDetail[]) => {
    this.dataSource = new MatTableDataSource<MoodDetail>(mood)
  });
  }
}