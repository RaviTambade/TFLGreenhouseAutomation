import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionDeficiencyDeleteComponent } from './nutrition-deficiency-delete.component';

describe('NutritionDeficiencyDeleteComponent', () => {
  let component: NutritionDeficiencyDeleteComponent;
  let fixture: ComponentFixture<NutritionDeficiencyDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutritionDeficiencyDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutritionDeficiencyDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
