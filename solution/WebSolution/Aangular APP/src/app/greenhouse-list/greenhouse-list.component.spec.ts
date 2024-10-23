import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenhouseListComponent } from './greenhouse-list.component';

describe('GreenhouseListComponent', () => {
  let component: GreenhouseListComponent;
  let fixture: ComponentFixture<GreenhouseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenhouseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenhouseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
