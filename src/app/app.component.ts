import { Component } from '@angular/core';
import { City } from './models/city.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gazat';
  masterCityList: City[];

  // masterSelectedCity: City = this.masterCityList[0];
  // changeCity(clickedCity){
  //   console.log(this.masterSelectedCity);
  //   this.masterSelectedCity = clickedCity;
  //   console.log(this.masterSelectedCity);
  // }
}
