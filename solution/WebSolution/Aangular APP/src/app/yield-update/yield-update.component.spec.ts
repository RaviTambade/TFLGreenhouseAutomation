import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YieldUpdateComponent } from './yield-update.component';

describe('YieldUpdateComponent', () => {
  let component: YieldUpdateComponent;
  let fixture: ComponentFixture<YieldUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YieldUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YieldUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
