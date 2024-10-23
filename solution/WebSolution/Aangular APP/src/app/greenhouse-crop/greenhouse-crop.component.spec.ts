import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenhouseCropComponent } from './greenhouse-crop.component';

describe('GreenhouseCropComponent', () => {
  let component: GreenhouseCropComponent;
  let fixture: ComponentFixture<GreenhouseCropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenhouseCropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenhouseCropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
