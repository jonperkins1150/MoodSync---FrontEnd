import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeLoggedComponent } from './components/home-logged/home-logged.component';
import { MusicComponent } from './components/music/music.component';
import { PlaylistsComponent } from './components/playlists/playlists.component';
import { AdminportalComponent } from './components/adminportal/adminportal.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { GenreComponent } from './components/genre/genre.component';

const routes: Routes = [
  {path: "", component: HomeLoggedComponent},
  {path: 'music', component:MusicComponent},
  {path: 'playlists', component: PlaylistsComponent },
  {path: 'adminportal', component: AdminportalComponent },
  {path: 'registration', component: RegistrationComponent }, 
  {path: 'genre', component: GenreComponent }, 
];

@NgModule({
  declarations: [
  ],
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
