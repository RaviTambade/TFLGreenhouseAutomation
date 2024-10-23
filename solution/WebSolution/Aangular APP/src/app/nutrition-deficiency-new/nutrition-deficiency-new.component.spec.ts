import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionDeficiencyNewComponent } from './nutrition-deficiency-new.component';

describe('NutritionDeficiencyNewComponent', () => {
  let component: NutritionDeficiencyNewComponent;
  let fixture: ComponentFixture<NutritionDeficiencyNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutritionDeficiencyNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutritionDeficiencyNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
