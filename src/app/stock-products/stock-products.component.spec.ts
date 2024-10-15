import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockProductsComponent } from './stock-products.component';

describe('StockProductsComponent', () => {
  let component: StockProductsComponent;
  let fixture: ComponentFixture<StockProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockProductsComponent]
    });
    fixture = TestBed.createComponent(StockProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
