import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { LoginComponent } from './login/login.component';
import { AdminportalComponent } from './adminportal/adminportal.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaylistsComponent,
    LoginComponent,
    AdminportalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
