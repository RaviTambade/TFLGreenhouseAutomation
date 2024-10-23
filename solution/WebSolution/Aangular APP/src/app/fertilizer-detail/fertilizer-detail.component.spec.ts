import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FertilizerDetailComponent } from './fertilizer-detail.component';

describe('FertilizerDetailComponent', () => {
  let component: FertilizerDetailComponent;
  let fixture: ComponentFixture<FertilizerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FertilizerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FertilizerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
