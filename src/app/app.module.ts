import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { CitySplashComponent } from './city-splash/city-splash.component';
import { BlogPanelComponent } from './blog-panel/blog-panel.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CitiesListComponent } from './cities-list/cities-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    CitySplashComponent,
    BlogPanelComponent,
    ContactComponent,
    AboutComponent,
    CitiesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
