import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PestDetailsComponent } from './pest-details.component';

describe('PestDetailsComponent', () => {
  let component: PestDetailsComponent;
  let fixture: ComponentFixture<PestDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PestDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
