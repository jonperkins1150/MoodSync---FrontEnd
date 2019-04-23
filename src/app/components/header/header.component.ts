import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAdmin: boolean;

  constructor(public auth: AuthService) {
    this.auth.isAdmin.subscribe((adminstatus: boolean)=> 
    this.isAdmin=adminstatus);
      }

  ngOnInit() { }
    
  }

