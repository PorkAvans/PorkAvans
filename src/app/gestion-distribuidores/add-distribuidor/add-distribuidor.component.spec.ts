import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDistribuidorComponent } from './add-distribuidor.component';

describe('AddDistribuidorComponent', () => {
  let component: AddDistribuidorComponent;
  let fixture: ComponentFixture<AddDistribuidorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddDistribuidorComponent]
    });
    fixture = TestBed.createComponent(AddDistribuidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
