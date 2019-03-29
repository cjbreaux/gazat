import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { City } from '../models/city.model';


@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.scss']
})
export class CitiesListComponent implements OnInit {
  @Input() childCityList: City[];
  @Output() clickSender = new EventEmitter();

  cityClicked(city: City) {
    this.clickSender.emit(city);
    console.log(city);
  }

  constructor() { }

  ngOnInit() {
  }

}
