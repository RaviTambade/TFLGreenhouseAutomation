import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FertilizerNewComponent } from './fertilizer-new.component';

describe('FertilizerNewComponent', () => {
  let component: FertilizerNewComponent;
  let fixture: ComponentFixture<FertilizerNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FertilizerNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FertilizerNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
