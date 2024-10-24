import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionUpdateComponent } from './solution-update.component';

describe('SolutionUpdateComponent', () => {
  let component: SolutionUpdateComponent;
  let fixture: ComponentFixture<SolutionUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
