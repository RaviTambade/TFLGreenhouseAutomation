import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IrrigationListComponent } from './irrigation-list.component';

describe('IrrigationListComponent', () => {
  let component: IrrigationListComponent;
  let fixture: ComponentFixture<IrrigationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrrigationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IrrigationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
