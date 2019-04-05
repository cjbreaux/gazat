import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCityViewComponent } from './main-city-view.component';

describe('MainCityViewComponent', () => {
  let component: MainCityViewComponent;
  let fixture: ComponentFixture<MainCityViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCityViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCityViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
