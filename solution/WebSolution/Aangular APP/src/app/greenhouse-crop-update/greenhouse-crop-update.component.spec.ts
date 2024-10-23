import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenhouseCropUpdateComponent } from './greenhouse-crop-update.component';

describe('GreenhouseCropUpdateComponent', () => {
  let component: GreenhouseCropUpdateComponent;
  let fixture: ComponentFixture<GreenhouseCropUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenhouseCropUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenhouseCropUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
