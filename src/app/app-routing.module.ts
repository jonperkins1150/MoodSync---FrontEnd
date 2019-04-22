import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminportalComponent } from './components/adminportal/adminportal.component';
import { DetailsComponent } from './components/details/details.component';
import { GenreComponent } from './components/genre/genre.component';
import { HomeLoggedComponent } from './components/home-logged/home-logged.component';
import { MoodComponent } from './components/mood/mood.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { PlaylistCreateComponent } from './components/playlist/playlist-create/playlist-create.component';
import { PlaylistDeleteComponent } from './components/playlist/playlist-delete/playlist-delete.component';
import { PlaylistDetailComponent } from './components/playlist/playlist-detail/playlist-detail.component';
import { PlaylistEditComponent } from './components/playlist/playlist-edit/playlist-edit.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SongComponent } from './components/song/song.component';

const routes: Routes = [
  { path: "", component: HomeLoggedComponent },
  { path: 'adminportal', component: AdminportalComponent },
  { path: 'details', component: DetailsComponent }, 
  { path: 'genre', component: GenreComponent },
  { path: 'mood', component: MoodComponent }, 
  {
    path: 'playlist', children: [
      { path: '', component: PlaylistComponent },
      { path: 'playlist-create', component: PlaylistCreateComponent},
      { path: 'playlist-detail/:id', component: PlaylistDetailComponent},
      { path: 'playlist-edit/:id', component: PlaylistEditComponent},
      { path: 'playlist-delete/:id', component: PlaylistDeleteComponent}
    ]
  },
  { path: 'registration', component: RegistrationComponent }, 
  { path: 'song', component:SongComponent }
  ];

@NgModule({
  declarations: [
  ],
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
