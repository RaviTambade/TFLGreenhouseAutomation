import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PestNewComponent } from './pest-new.component';

describe('PestNewComponent', () => {
  let component: PestNewComponent;
  let fixture: ComponentFixture<PestNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PestNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PestNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
