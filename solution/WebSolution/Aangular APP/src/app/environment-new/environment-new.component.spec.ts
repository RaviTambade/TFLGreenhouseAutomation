import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentNewComponent } from './environment-new.component';

describe('EnvironmentNewComponent', () => {
  let component: EnvironmentNewComponent;
  let fixture: ComponentFixture<EnvironmentNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvironmentNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironmentNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
