import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionDeleteComponent } from './solution-delete.component';

describe('SolutionDeleteComponent', () => {
  let component: SolutionDeleteComponent;
  let fixture: ComponentFixture<SolutionDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
