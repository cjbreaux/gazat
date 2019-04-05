import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { City } from '../models/city.model';
import { CityService } from '../city.service';

@Component({
  selector: 'app-city-splash',
  templateUrl: './city-splash.component.html',
  styleUrls: ['./city-splash.component.scss'],
  providers: [CityService]
})
export class CitySplashComponent implements OnInit {
  cityName: string = null;
  cityToDisplay: City;

  constructor(private route: ActivatedRoute, private location: Location, private cityService: CityService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.cityName = urlParameters['city'];
    });
    this.cityToDisplay = this.cityService.getCityByName(this.cityName)
  }

  // ngOnChanges() {
  //   this.route.params.forEach((urlParameters) => {
  //     this.cityName = urlParameters['city'];
  //   });
  //   this.cityToDisplay = this.cityService.getCityByName(this.cityName)
  // }


}
