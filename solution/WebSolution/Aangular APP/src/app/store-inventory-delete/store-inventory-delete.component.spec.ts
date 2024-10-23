import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreInventoryDeleteComponent } from './store-inventory-delete.component';

describe('StoreInventoryDeleteComponent', () => {
  let component: StoreInventoryDeleteComponent;
  let fixture: ComponentFixture<StoreInventoryDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreInventoryDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreInventoryDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
