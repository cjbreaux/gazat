import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPanelComponent } from './blog-panel.component';

describe('BlogPanelComponent', () => {
  let component: BlogPanelComponent;
  let fixture: ComponentFixture<BlogPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
