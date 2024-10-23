import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YieldDetailComponent } from './yield-detail.component';

describe('YieldDetailComponent', () => {
  let component: YieldDetailComponent;
  let fixture: ComponentFixture<YieldDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YieldDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YieldDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
