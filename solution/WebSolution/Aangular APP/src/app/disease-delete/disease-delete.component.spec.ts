import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiseaseDeleteComponent } from './disease-delete.component';

describe('DiseaseDeleteComponent', () => {
  let component: DiseaseDeleteComponent;
  let fixture: ComponentFixture<DiseaseDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiseaseDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiseaseDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
