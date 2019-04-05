import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { City } from '../models/city.model';
import { CityService } from '../city.service';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [CityService]
})
export class DropdownComponent implements OnInit {
  cityName: string = null;
  cityToDisplay: City;
  childCityList: City[];



  constructor(private route: ActivatedRoute, private location: Location, private cityService: CityService) { }

  ngOnInit() {
    this.childCityList = this.cityService.getCities();
    console.log(this.childCityList);
    this.route.params.forEach((urlParameters) => {
      this.cityName = urlParameters['city'];
      this.cityToDisplay = this.cityService.getCityByName(this.cityName)
    });
  }

}
