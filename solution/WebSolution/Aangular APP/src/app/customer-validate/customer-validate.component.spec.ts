import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerValidateComponent } from './customer-validate.component';

describe('CustomerValidateComponent', () => {
  let component: CustomerValidateComponent;
  let fixture: ComponentFixture<CustomerValidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerValidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
