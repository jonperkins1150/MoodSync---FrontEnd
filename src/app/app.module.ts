import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import {
  MatToolbarModule, 
  MatFormFieldModule,
  MatInputModule,
  MatGridList,
  MatGridTile,
} from '@angular/material';

import { MatButtonModule} from '@angular/material/button';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { PlaylistsComponent } from './components/playlists/playlists.component';
import { AdminportalComponent } from './components/adminportal/adminportal.component';
import { HomeLoggedComponent } from './components/home-logged/home-logged.component';
import { HomeNotLoggedComponent } from './components/home-not-logged/home-not-logged.component';
import { MusicComponent } from './components/music/music.component';
import { RegistrationComponent} from './components/registration/registration.component';
import { HeaderComponent } from './components/header/header.component';
import { GenreComponent } from './components/genre/genre.component';

import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/login/login.component';

const routes = [
  { path: 'registration', component: RegistrationComponent }, 
  { path: 'login', component: LoginComponent },
  { path: '**', component: RegistrationComponent },
  { path: "", component: HomeLoggedComponent},
];

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
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes), 
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    AppRoutingModule,
    
  ],
  providers: [
  AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
