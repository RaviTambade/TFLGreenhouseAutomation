import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiseaseNewComponent } from './disease-new.component';

describe('DiseaseNewComponent', () => {
  let component: DiseaseNewComponent;
  let fixture: ComponentFixture<DiseaseNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiseaseNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiseaseNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
