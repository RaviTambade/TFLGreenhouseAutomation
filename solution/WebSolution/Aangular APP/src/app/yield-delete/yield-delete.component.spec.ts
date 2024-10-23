import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YieldDeleteComponent } from './yield-delete.component';

describe('YieldDeleteComponent', () => {
  let component: YieldDeleteComponent;
  let fixture: ComponentFixture<YieldDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YieldDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YieldDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
