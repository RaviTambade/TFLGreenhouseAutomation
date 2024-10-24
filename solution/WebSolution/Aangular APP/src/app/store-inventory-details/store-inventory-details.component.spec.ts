import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreInventoryDetailsComponent } from './store-inventory-details.component';

describe('StoreInventoryDetailsComponent', () => {
  let component: StoreInventoryDetailsComponent;
  let fixture: ComponentFixture<StoreInventoryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreInventoryDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreInventoryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
