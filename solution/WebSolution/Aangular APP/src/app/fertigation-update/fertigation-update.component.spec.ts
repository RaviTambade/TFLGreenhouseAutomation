import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FertigationUpdateComponent } from './fertigation-update.component';

describe('FertigationUpdateComponent', () => {
  let component: FertigationUpdateComponent;
  let fixture: ComponentFixture<FertigationUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FertigationUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FertigationUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
