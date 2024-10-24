import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimateMonitoringComponent } from './climate-monitoring.component';

describe('ClimateMonitoringComponent', () => {
  let component: ClimateMonitoringComponent;
  let fixture: ComponentFixture<ClimateMonitoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClimateMonitoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimateMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
