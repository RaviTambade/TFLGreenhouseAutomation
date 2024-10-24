import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionDeficiencyListComponent } from './nutrition-deficiency-list.component';

describe('NutritionDeficiencyListComponent', () => {
  let component: NutritionDeficiencyListComponent;
  let fixture: ComponentFixture<NutritionDeficiencyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutritionDeficiencyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutritionDeficiencyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
