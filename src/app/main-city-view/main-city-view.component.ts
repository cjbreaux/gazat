import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { City } from '../models/city.model';

@Component({
  selector: 'app-main-city-view',
  templateUrl: './main-city-view.component.html',
  styleUrls: ['./main-city-view.component.scss']
})
export class MainCityViewComponent implements OnInit {
  cityId: number = null;

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.cityId = urlParameters['city'];
    });
  }

}
