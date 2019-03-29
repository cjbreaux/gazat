import { Component, OnInit, Input } from '@angular/core';
import { City } from '../models/city.model';

@Component({
  selector: 'app-blog-panel',
  templateUrl: './blog-panel.component.html',
  styleUrls: ['./blog-panel.component.scss']
})
export class BlogPanelComponent implements OnInit {
  @Input() childSelectedCity: City;

  constructor() { }

  ngOnInit() {
  }

}
