import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitySplashComponent } from './city-splash.component';

describe('CitySplashComponent', () => {
  let component: CitySplashComponent;
  let fixture: ComponentFixture<CitySplashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitySplashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitySplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
