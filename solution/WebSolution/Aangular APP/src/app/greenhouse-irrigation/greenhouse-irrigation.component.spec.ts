import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenhouseIrrigationComponent } from './greenhouse-irrigation.component';

describe('GreenhouseIrrigationComponent', () => {
  let component: GreenhouseIrrigationComponent;
  let fixture: ComponentFixture<GreenhouseIrrigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenhouseIrrigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenhouseIrrigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
