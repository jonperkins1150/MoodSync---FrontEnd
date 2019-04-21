import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminportalComponent } from './components/adminportal/adminportal.component';
import { DetailsComponent } from './components/details/details.component';
import { GenreComponent } from './components/genre/genre.component';
import { HomeLoggedComponent } from './components/home-logged/home-logged.component';
import { MoodComponent } from './components/mood/mood.component';
import { MoodiesplaylistsComponent } from './components/moodiesplaylists/moodiesplaylists.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SongComponent } from './components/song/song.component';
import { UserplaylistsComponent } from './components/userplaylists/userplaylists.component';

const routes: Routes = [
  {path: "", component: HomeLoggedComponent },
  {path: 'adminportal', component: AdminportalComponent },
  {path: 'details', component: DetailsComponent }, 
  {path: 'genre', component: GenreComponent },
  {path: 'mood', component: MoodComponent }, 
  {path: 'moodiesplaylists', component: MoodiesplaylistsComponent },
  {path: 'registration', component: RegistrationComponent }, 
  {path: 'song', component:SongComponent },
  {path: 'userplaylists', component: UserplaylistsComponent},
];

@NgModule({
  declarations: [
  ],
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
