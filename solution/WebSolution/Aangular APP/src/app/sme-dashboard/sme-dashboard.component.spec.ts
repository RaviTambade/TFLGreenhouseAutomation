import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SMEDashboardComponent } from './sme-dashboard.component';

describe('SMEDashboardComponent', () => {
  let component: SMEDashboardComponent;
  let fixture: ComponentFixture<SMEDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SMEDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SMEDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
