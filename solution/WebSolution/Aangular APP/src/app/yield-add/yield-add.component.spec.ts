import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YieldAddComponent } from './yield-add.component';

describe('YieldAddComponent', () => {
  let component: YieldAddComponent;
  let fixture: ComponentFixture<YieldAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YieldAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YieldAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
