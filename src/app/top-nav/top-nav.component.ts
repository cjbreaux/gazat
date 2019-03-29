import { Component, OnInit, Input } from '@angular/core';
import { City } from '../models/city.model';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  @Input() childSelectedCity: City;

  constructor() { }

  ngOnInit() {
  }

}
