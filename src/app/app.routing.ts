import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DefaultPageViewComponent } from './default-page-view/default-page-view.component';
import { MainCityViewComponent } from './main-city-view/main-city-view.component';

const appRoutes: Routes = [

  {
    path: '',
    component: DefaultPageViewComponent
  },
  {
    path: ':city',
    component: MainCityViewComponent
  }

 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
