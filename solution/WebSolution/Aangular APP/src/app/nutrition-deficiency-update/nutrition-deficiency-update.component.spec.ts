import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionDeficiencyUpdateComponent } from './nutrition-deficiency-update.component';

describe('NutritionDeficiencyUpdateComponent', () => {
  let component: NutritionDeficiencyUpdateComponent;
  let fixture: ComponentFixture<NutritionDeficiencyUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutritionDeficiencyUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutritionDeficiencyUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
