import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MoodDetail } from 'src/app/models/MoodDetail';
import { MoodService } from 'src/app/services/mood.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-Mood-edit',
  templateUrl: './Mood-edit.component.html',
  styleUrls: ['./Mood-edit.component.css']
})
export class MoodEditComponent implements OnInit {

  Mood: MoodDetail;

  editMoodForm: FormGroup;
  constructor(private _form: FormBuilder,
              private _moodService: MoodService,
              private _ar: ActivatedRoute,
              private _router: Router) { 

this._ar.paramMap.subscribe(p => {
  this._moodService.getMood(p.get('id')).subscribe((singleMood: MoodDetail) => {
    this.Mood = singleMood;
    this.createForm();
  });
});  
}

  ngOnInit() {
  }
createForm() {
  this.editMoodForm = this._form.group({
    MoodId: new FormControl(this.Mood.MoodId),
    MoodName: new FormControl(this.Mood.MoodName),

  });
}

onSubmit(form) {
  const updateMood: MoodDetail = {
    MoodId: form.value.MoodId,
    MoodName: form.value.MoodName,
    
  };
  this._moodService.updateMood(updateMood).subscribe(d => {
    this._router.navigate(['/Mood']);
  });
}
}
