import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionNewComponent } from './solution-new.component';

describe('SolutionNewComponent', () => {
  let component: SolutionNewComponent;
  let fixture: ComponentFixture<SolutionNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
