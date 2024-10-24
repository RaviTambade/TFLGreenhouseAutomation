import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesticideDeleteComponent } from './pesticide-delete.component';

describe('PesticideDeleteComponent', () => {
  let component: PesticideDeleteComponent;
  let fixture: ComponentFixture<PesticideDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesticideDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesticideDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
