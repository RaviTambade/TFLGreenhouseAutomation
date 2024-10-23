import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TankUpdateComponent } from './tank-update.component';

describe('TankUpdateComponent', () => {
  let component: TankUpdateComponent;
  let fixture: ComponentFixture<TankUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TankUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TankUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
