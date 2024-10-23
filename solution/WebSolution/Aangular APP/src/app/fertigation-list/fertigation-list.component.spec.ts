import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FertigationListComponent } from './fertigation-list.component';

describe('FertigationListComponent', () => {
  let component: FertigationListComponent;
  let fixture: ComponentFixture<FertigationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FertigationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FertigationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
