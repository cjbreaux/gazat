import { Component, OnInit, Input} from '@angular/core';
import { City } from '../models/city.model';

@Component({
  selector: 'app-city-splash',
  templateUrl: './city-splash.component.html',
  styleUrls: ['./city-splash.component.scss']
})
export class CitySplashComponent implements OnInit {
  @Input() childSelectedCity: City;

  constructor() { }

  ngOnInit() {
  }

}
