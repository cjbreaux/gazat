import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { City } from '../models/city.model';
import { CityService } from '../city.service';

@Component({
  selector: 'app-blog-panel',
  templateUrl: './blog-panel.component.html',
  styleUrls: ['./blog-panel.component.scss'],
  providers: [CityService]
})
export class BlogPanelComponent implements OnInit {
  cityName: string = null;
  cityToDisplay: City;

  constructor(private route: ActivatedRoute, private location: Location, private cityService: CityService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.cityName = urlParameters['city'];
      if (this.cityToDisplay) {
        this.cityToDisplay = this.cityService.getCityByName(this.cityName)
      } else {
        this.cityToDisplay = this.cityService.getCityByName('Portland')
      }
    });
  }

}
