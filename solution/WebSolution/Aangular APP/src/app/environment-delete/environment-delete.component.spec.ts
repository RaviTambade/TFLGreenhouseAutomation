import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentDeleteComponent } from './environment-delete.component';

describe('EnvironmentDeleteComponent', () => {
  let component: EnvironmentDeleteComponent;
  let fixture: ComponentFixture<EnvironmentDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvironmentDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironmentDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
