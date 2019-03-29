import { Component, OnInit, Input } from '@angular/core';
import { City } from '../models/city.model';


@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.scss']
})
export class CitiesListComponent implements OnInit {
  @Input() childCityList: City[];

  constructor() { }

  ngOnInit() {
  }

}
