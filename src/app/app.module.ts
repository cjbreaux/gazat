import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { CitySplashComponent } from './city-splash/city-splash.component';
import { BlogPanelComponent } from './blog-panel/blog-panel.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CitiesListComponent } from './cities-list/cities-list.component';
import { MainCityViewComponent } from './main-city-view/main-city-view.component';
import { DefaultPageViewComponent } from './default-page-view/default-page-view.component';
import { BlogCardComponent } from './blog-card/blog-card.component';






@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    CitySplashComponent,
    BlogPanelComponent,
    ContactComponent,
    AboutComponent,
    CitiesListComponent,
    MainCityViewComponent,
    DefaultPageViewComponent,
    BlogCardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
