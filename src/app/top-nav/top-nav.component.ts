import { Component, OnInit} from '@angular/core';
import { City } from '../models/city.model';
import { CityService } from '../city.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
  providers: [CityService]
})
export class TopNavComponent implements OnInit {
  childSelectedCity: City;

  constructor(private cityService: CityService) { }

  ngOnInit() {
    this.childSelectedCity = this.cityService.getCities();
  }

}
