import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FertigationNewComponent } from './fertigation-new.component';

describe('FertigationNewComponent', () => {
  let component: FertigationNewComponent;
  let fixture: ComponentFixture<FertigationNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FertigationNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FertigationNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
