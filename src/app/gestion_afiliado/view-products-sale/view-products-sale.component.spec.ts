import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductsSaleComponent } from './view-products-sale.component';

describe('ViewProductsSaleComponent', () => {
  let component: ViewProductsSaleComponent;
  let fixture: ComponentFixture<ViewProductsSaleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewProductsSaleComponent]
    });
    fixture = TestBed.createComponent(ViewProductsSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
