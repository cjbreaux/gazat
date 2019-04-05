import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { City } from '../models/city.model';
import { CityService } from '../city.service';


@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.scss'],
  providers: [CityService]
})
export class CitiesListComponent implements OnInit {

  childCityList: City[];
  @Output() clickSender = new EventEmitter();

  constructor(private cityService: CityService) { }

  ngOnInit() {
    this.childCityList = this.cityService.getCities();
  }

  cityClicked(city: City) {
    this.clickSender.emit(city);
    console.log(city);
  }


}
