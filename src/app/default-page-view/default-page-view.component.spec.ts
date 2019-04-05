import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultPageViewComponent } from './default-page-view.component';

describe('DefaultPageViewComponent', () => {
  let component: DefaultPageViewComponent;
  let fixture: ComponentFixture<DefaultPageViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultPageViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultPageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
