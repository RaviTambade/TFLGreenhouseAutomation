import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FertigationDetailsComponent } from './fertigation-details.component';

describe('FertigationDetailsComponent', () => {
  let component: FertigationDetailsComponent;
  let fixture: ComponentFixture<FertigationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FertigationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FertigationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
