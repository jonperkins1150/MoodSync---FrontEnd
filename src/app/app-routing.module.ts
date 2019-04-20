import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminportalComponent } from './components/adminportal/adminportal.component';
import { DetailsComponent } from './components/details/details.component';
import { GenreComponent } from './components/genre/genre.component';
import { HomeLoggedComponent } from './components/home-logged/home-logged.component';
import { MoodComponent } from './components/mood/mood.component';
import { PlaylistsComponent } from './components/playlists/playlists.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SongComponent } from './components/song/song.component';

const routes: Routes = [
  {path: "", component: HomeLoggedComponent },
  {path: 'adminportal', component: AdminportalComponent },
  {path: 'details', component: DetailsComponent }, 
  {path: 'genre', component: GenreComponent },
  {path: 'mood', component: MoodComponent }, 
  {path: 'playlists', component: PlaylistsComponent },
  {path: 'registration', component: RegistrationComponent }, 
  {path: 'song', component:SongComponent },
];

@NgModule({
  declarations: [
  ],
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
