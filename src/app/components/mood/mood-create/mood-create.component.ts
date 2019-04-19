import { Component, OnInit } from '@angular/core';
import { MoodService} from '../../../services/mood.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mood-create',
  templateUrl: './mood-create.component.html',
  styleUrls: ['./mood-create.component.css']
})
export class MoodCreateComponent implements OnInit {

  moodForm: FormGroup;

  constructor(private _moodService: MoodService, private _form: FormBuilder, private _router: Router) {this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.moodForm = this._form.group({
      MoodName: new FormControl
    });
  }
  onSubmit() {
    this._moodService.createMood(this.moodForm.value).subscribe(data => {
      this._router.navigate(['/moods']);
    })
  }
}
