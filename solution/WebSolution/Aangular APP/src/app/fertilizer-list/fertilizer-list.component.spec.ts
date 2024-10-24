import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FertilizerListComponent } from './fertilizer-list.component';

describe('FertilizerListComponent', () => {
  let component: FertilizerListComponent;
  let fixture: ComponentFixture<FertilizerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FertilizerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FertilizerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
