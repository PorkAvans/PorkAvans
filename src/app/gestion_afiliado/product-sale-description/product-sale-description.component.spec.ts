import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSaleDescriptionComponent } from './product-sale-description.component';

describe('ProductSaleDescriptionComponent', () => {
  let component: ProductSaleDescriptionComponent;
  let fixture: ComponentFixture<ProductSaleDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductSaleDescriptionComponent]
    });
    fixture = TestBed.createComponent(ProductSaleDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
