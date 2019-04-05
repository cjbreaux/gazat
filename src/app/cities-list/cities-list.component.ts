import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { City } from '../models/city.model';
import { CityService } from '../city.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.scss'],
  providers: [CityService]
})
export class CitiesListComponent implements OnInit {

  childCityList: City[];
  @Output() clickSender = new EventEmitter();

  constructor(private cityService: CityService, private router: Router) { }

  ngOnInit() {
    this.childCityList = this.cityService.getCities();
  }


  goToCityPage(clickedCity: City) {
    this.router.navigate([clickedCity.name]);
  }


}
