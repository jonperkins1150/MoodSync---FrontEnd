import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { AdminportalComponent } from './components/adminportal/adminportal.component';
import { ContactComponent } from './components/contact/contact.component';
import { DetailsComponent } from './components/details/details.component';
import { GenreComponent } from './components/genre/genre.component';
import { GenreCreateComponent } from './components/genre/genre-create/genre-create.component';
import { GenreDeleteComponent } from './components/genre/genre-delete/genre-delete.component';
import { GenreDetailComponent } from './components/genre/genre-details/genre-details.component';
import { GenreEditComponent } from './components/genre/genre-edit/genre-edit.component';

import { HomeLoggedComponent } from './components/home-logged/home-logged.component';
import { MoodComponent } from './components/mood/mood.component';
import { MoodCreateComponent } from './components/mood/mood-create/mood-create.component';
import { MoodDeleteComponent } from './components/mood/mood-delete/mood-delete.component';
import { MoodDetailComponent } from './components/mood/mood-detail/mood-detail.component';
import { MoodEditComponent } from './components/mood/mood-edit/mood-edit.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { PlaylistCreateComponent } from './components/playlist/playlist-create/playlist-create.component';
import { PlaylistDeleteComponent } from './components/playlist/playlist-delete/playlist-delete.component';
import { PlaylistDetailComponent } from './components/playlist/playlist-detail/playlist-detail.component';
import { PlaylistEditComponent } from './components/playlist/playlist-edit/playlist-edit.component';
import { SongComponent } from './components/song/song.component';
import { SongCreateComponent } from './components/song/song-create/song-create.component';
import { SongEditComponent } from './components/song/song-edit/song-edit.component';
import { SongDeleteComponent } from './components/song/song-delete/song-delete.component';
import { SongDetailsComponent } from './components/song/song-details/song-details.component';
import { RegistrationComponent } from './components/registration/registration.component';

const routes: Routes = [
  { path: "", component: HomeLoggedComponent },
  { path: 'about', component: AboutComponent },
  { path: 'adminportal', canActivate: [AuthGuard] , component: AdminportalComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'details', component: DetailsComponent }, 
 
  {
  path: 'genre', children: [
    { path: '', component: GenreComponent },
    { path: 'genre-create', component: GenreCreateComponent},
    { path: 'genre-detail/:id', component: GenreDetailComponent},
    { path: 'genre-edit/:id', component: GenreEditComponent},
    { path: 'genre-delete/:id', component: GenreDeleteComponent}
  ]
},
  {
      path: 'mood', children: [
        { path: '', component: MoodComponent },
        { path: 'mood-create', component: MoodCreateComponent},
        { path: 'mood-detail/:id', component: MoodDetailComponent},
        { path: 'mood-edit/:id', component: MoodEditComponent},
        { path: 'mood-delete/:id', component: MoodDeleteComponent}
      ]
    },
  {
    path: 'playlist', children: [
      { path: '', component: PlaylistComponent },
      { path: 'playlist-create', component: PlaylistCreateComponent},
      { path: 'playlist-detail/:id', component: PlaylistDetailComponent},
      { path: 'playlist-edit/:id', component: PlaylistEditComponent},
      { path: 'playlist-delete/:id', component: PlaylistDeleteComponent}
    ]
  }, 

  { path: 'song', children: [
    {path: '', component: SongComponent},
    {path: 'song-create', component: SongCreateComponent},
    {path: 'song-edit/:id', component: SongEditComponent},
    {path: 'song-detail/:id', component: SongDetailsComponent},
    {path: 'song-delete/:id', component: SongDeleteComponent}
  ] }
  
  ];

@NgModule({
  declarations: [
  ],
  
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
