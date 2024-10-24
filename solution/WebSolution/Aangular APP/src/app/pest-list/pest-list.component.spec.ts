import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PestListComponent } from './pest-list.component';

describe('PestListComponent', () => {
  let component: PestListComponent;
  let fixture: ComponentFixture<PestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
