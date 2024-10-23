import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientDeleteComponent } from './ingredient-delete.component';

describe('IngredientDeleteComponent', () => {
  let component: IngredientDeleteComponent;
  let fixture: ComponentFixture<IngredientDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
