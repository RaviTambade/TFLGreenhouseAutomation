import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PestUpdateComponent } from './pest-update.component';

describe('PestUpdateComponent', () => {
  let component: PestUpdateComponent;
  let fixture: ComponentFixture<PestUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PestUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PestUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
