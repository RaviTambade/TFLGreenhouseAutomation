import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TankDeleteComponent } from './tank-delete.component';

describe('TankDeleteComponent', () => {
  let component: TankDeleteComponent;
  let fixture: ComponentFixture<TankDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TankDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TankDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
