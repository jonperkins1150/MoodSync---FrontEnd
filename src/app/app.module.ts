import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MatToolbarModule, 
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
} from '@angular/material';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaylistsComponent } from './components/playlists/playlists.component';
import { AdminportalComponent } from './components/adminportal/adminportal.component';
import { HomeLoggedComponent } from './components/home-logged/home-logged.component';
import { HomeNotLoggedComponent } from './components/home-not-logged/home-not-logged.component';
import { MusicComponent } from './components/music/music.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaylistsComponent,
    AdminportalComponent,
    HomeLoggedComponent,
    HomeNotLoggedComponent,
    MusicComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
