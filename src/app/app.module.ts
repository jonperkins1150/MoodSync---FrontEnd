import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
  MatToolbarModule, 
  MatFormFieldModule,
  MatInputModule,
  MatGridList,
  MatGridTile,
} from '@angular/material';

import { MatButtonModule} from '@angular/material/button';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaylistsComponent } from './components/playlists/playlists.component';
import { AdminportalComponent } from './components/adminportal/adminportal.component';
import { HomeLoggedComponent } from './components/home-logged/home-logged.component';
import { HomeNotLoggedComponent } from './components/home-not-logged/home-not-logged.component';
import { MusicComponent } from './components/music/music.component';
import { RegistrationComponent} from './components/registration/registration.component';
import { HeaderComponent } from './components/header/header.component';
import { GenreComponent } from './components/genre/genre.component';

import { HttpClientModule} from '@angular/common/http';
import { DetailsComponent } from './components/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaylistsComponent,
    AdminportalComponent,
    HomeLoggedComponent,
    HomeNotLoggedComponent,
    MusicComponent,
    MatGridList,
    RegistrationComponent,
    MatGridTile,
    HeaderComponent,
    GenreComponent,
    DetailsComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
