import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FertilizerUpdateComponent } from './fertilizer-update.component';

describe('FertilizerUpdateComponent', () => {
  let component: FertilizerUpdateComponent;
  let fixture: ComponentFixture<FertilizerUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FertilizerUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FertilizerUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
