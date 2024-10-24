import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenhouseEnvironmentComponent } from './greenhouse-environment.component';

describe('GreenhouseEnvironmentComponent', () => {
  let component: GreenhouseEnvironmentComponent;
  let fixture: ComponentFixture<GreenhouseEnvironmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenhouseEnvironmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenhouseEnvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
