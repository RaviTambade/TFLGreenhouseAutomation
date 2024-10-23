import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenhouseCropDeleteComponent } from './greenhouse-crop-delete.component';

describe('GreenhouseCropDeleteComponent', () => {
  let component: GreenhouseCropDeleteComponent;
  let fixture: ComponentFixture<GreenhouseCropDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenhouseCropDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenhouseCropDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
