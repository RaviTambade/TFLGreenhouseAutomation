import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenhouseFertigationComponent } from './greenhouse-fertigation.component';

describe('GreenhouseFertigationComponent', () => {
  let component: GreenhouseFertigationComponent;
  let fixture: ComponentFixture<GreenhouseFertigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenhouseFertigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenhouseFertigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
