import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionDeficiencyDetailsComponent } from './nutrition-deficiency-details.component';

describe('NutritionDeficiencyDetailsComponent', () => {
  let component: NutritionDeficiencyDetailsComponent;
  let fixture: ComponentFixture<NutritionDeficiencyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutritionDeficiencyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutritionDeficiencyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
