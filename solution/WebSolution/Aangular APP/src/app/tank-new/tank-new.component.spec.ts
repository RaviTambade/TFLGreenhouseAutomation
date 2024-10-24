import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TankNewComponent } from './tank-new.component';

describe('TankNewComponent', () => {
  let component: TankNewComponent;
  let fixture: ComponentFixture<TankNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TankNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TankNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
