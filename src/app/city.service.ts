import { Injectable } from '@angular/core';
import { City } from './models/city.model';
import { CITIES } from './mock-city-data';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor() { }

  getCities() {
    return CITIES;
  }

  getCityByName(cityName: string) {
    for (let i=0; i< CITIES.length; i++) {
      if (CITIES[i].name === cityName) {
        return CITIES[i];
      }
    }
  }

}
