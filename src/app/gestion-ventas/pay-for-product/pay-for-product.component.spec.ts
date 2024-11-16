import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayForProductComponent } from './pay-for-product.component';

describe('PayForProductComponent', () => {
  let component: PayForProductComponent;
  let fixture: ComponentFixture<PayForProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PayForProductComponent]
    });
    fixture = TestBed.createComponent(PayForProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
