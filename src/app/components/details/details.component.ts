import { Component, OnInit, Input } from '@angular/core';
import { SongService } from 'src/app/services/song.service';

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
        qwer: "yoi"
  };
  constructor() { }

  ngOnInit() {
    //this.dtype = "genre";
    console.log("data: " + this.dtype);
    
  }

  doThingiesAndStuff(){
    
  }
}