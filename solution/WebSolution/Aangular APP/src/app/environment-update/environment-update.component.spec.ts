import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentUpdateComponent } from './environment-update.component';

describe('EnvironmentUpdateComponent', () => {
  let component: EnvironmentUpdateComponent;
  let fixture: ComponentFixture<EnvironmentUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvironmentUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironmentUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
