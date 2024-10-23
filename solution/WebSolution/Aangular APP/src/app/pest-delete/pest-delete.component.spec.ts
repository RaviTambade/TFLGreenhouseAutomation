import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PestDeleteComponent } from './pest-delete.component';

describe('PestDeleteComponent', () => {
  let component: PestDeleteComponent;
  let fixture: ComponentFixture<PestDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PestDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PestDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
