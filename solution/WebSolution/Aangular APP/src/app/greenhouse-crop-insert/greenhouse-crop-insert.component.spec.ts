import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenhouseCropInsertComponent } from './greenhouse-crop-insert.component';

describe('GreenhouseCropInsertComponent', () => {
  let component: GreenhouseCropInsertComponent;
  let fixture: ComponentFixture<GreenhouseCropInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenhouseCropInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenhouseCropInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
