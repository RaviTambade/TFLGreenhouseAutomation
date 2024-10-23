import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenhouseClimateComponent } from './greenhouse-climate.component';

describe('GreenhouseClimateComponent', () => {
  let component: GreenhouseClimateComponent;
  let fixture: ComponentFixture<GreenhouseClimateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenhouseClimateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenhouseClimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
