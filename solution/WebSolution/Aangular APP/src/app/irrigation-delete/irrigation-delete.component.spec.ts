import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IrrigationDeleteComponent } from './irrigation-delete.component';

describe('IrrigationDeleteComponent', () => {
  let component: IrrigationDeleteComponent;
  let fixture: ComponentFixture<IrrigationDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrrigationDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IrrigationDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
