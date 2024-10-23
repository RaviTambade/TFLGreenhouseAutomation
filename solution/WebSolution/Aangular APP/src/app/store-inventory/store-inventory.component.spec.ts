import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreInventoryComponent } from './store-inventory.component';

describe('StoreInventoryComponent', () => {
  let component: StoreInventoryComponent;
  let fixture: ComponentFixture<StoreInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
