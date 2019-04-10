import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeLoggedComponent } from './home-logged/home-logged.component';
import { HomeNotLoggedComponent } from './home-not-logged/home-not-logged.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeLoggedComponent,
    HomeNotLoggedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
