import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreInventoryUpdateComponent } from './store-inventory-update.component';

describe('StoreInventoryUpdateComponent', () => {
  let component: StoreInventoryUpdateComponent;
  let fixture: ComponentFixture<StoreInventoryUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreInventoryUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreInventoryUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
