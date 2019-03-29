import { Component } from '@angular/core';
import { City } from './models/city.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gazat';
  masterCityList: City[] = [
    new City('Portland'),
    new City('Seattle'),
    new City('Atlanta'),
    new City('Austin'),
    new City('Baltimore'),
    new City('Charleston'),
    new City('Chicago')
  ];
  masterSelectedCity: City = this.masterCityList[0];
  changeCity(clickedCity){
    console.log(this.masterSelectedCity);
    this.masterSelectedCity = clickedCity;
    console.log(this.masterSelectedCity);
  }
}
