import { Component, OnInit, Input } from '@angular/core';
import { SongService } from 'src/app/services/song.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() dtype: string;
  data : {}
  tst = {asdf: "ye",
        fdsa: "ya",
        qwer: "yoi",
        rewq: "yuh"
  };
  public dataForm: FormGroup;
  constructor(private _form: FormBuilder) { }

  ngOnInit() {
    //this.dtype = "genre";
    //console.log("data: " + this.dtype);
    this.makeElements(this.tst);
    var yep = this.doThingiesAndStuff(this.tst);
    this.dataForm = this._form.group(yep);
    console.log(this._form);
    console.log(this.dataForm.value);
  }

  doThingiesAndStuff(ent){
    var formTemplate = {};
    for(let r in ent){
      formTemplate[r] = new FormControl;
      formTemplate[r].value = "yuh";
    }
    return formTemplate;
  }

  makeElements(ent){
    for(let r in ent){
      this.addElement(r + "lbl", "label", document.getElementById("angForm"), r);
      this.addElement(r, "input", document.getElementById("angForm"), "");
    }
  }

  addElement(id, type, parent, innards){
    var child = document.createElement(type);
    child.id = id;
    parent.appendChild(child);
    child.innerHTML = innards || "";
  }
}