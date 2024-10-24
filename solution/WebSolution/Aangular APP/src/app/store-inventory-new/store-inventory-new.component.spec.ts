import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreInventoryNewComponent } from './store-inventory-new.component';

describe('StoreInventoryNewComponent', () => {
  let component: StoreInventoryNewComponent;
  let fixture: ComponentFixture<StoreInventoryNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreInventoryNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreInventoryNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
