import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IrrigationUpdateComponent } from './irrigation-update.component';

describe('IrrigationUpdateComponent', () => {
  let component: IrrigationUpdateComponent;
  let fixture: ComponentFixture<IrrigationUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrrigationUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IrrigationUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
