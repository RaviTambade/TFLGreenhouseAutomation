import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IrrigationNewComponent } from './irrigation-new.component';

describe('IrrigationNewComponent', () => {
  let component: IrrigationNewComponent;
  let fixture: ComponentFixture<IrrigationNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrrigationNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IrrigationNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
