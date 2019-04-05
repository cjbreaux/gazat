import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { City } from '../models/city.model';
import { CityService } from '../city.service';

@Component({
  selector: 'app-default-page-view',
  templateUrl: './default-page-view.component.html',
  styleUrls: ['./default-page-view.component.scss'],
  providers: [CityService]

})
export class DefaultPageViewComponent implements OnInit {
  cityName: string = null;
  cityToDisplay: City;

  constructor(private route: ActivatedRoute, private location: Location, private cityService: CityService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.cityName = urlParameters['city'];
    });
    this.cityToDisplay = this.cityService.getCityByName(this.cityName)
  }

}
