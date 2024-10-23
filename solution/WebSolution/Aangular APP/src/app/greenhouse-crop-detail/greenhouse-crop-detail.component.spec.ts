import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenhouseCropDetailComponent } from './greenhouse-crop-detail.component';

describe('GreenhouseCropDetailComponent', () => {
  let component: GreenhouseCropDetailComponent;
  let fixture: ComponentFixture<GreenhouseCropDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenhouseCropDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenhouseCropDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
