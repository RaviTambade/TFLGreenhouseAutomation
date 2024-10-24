import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TankScheduleDeleteComponent } from './tank-schedule-delete.component';

describe('TankScheduleDeleteComponent', () => {
  let component: TankScheduleDeleteComponent;
  let fixture: ComponentFixture<TankScheduleDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TankScheduleDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TankScheduleDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
