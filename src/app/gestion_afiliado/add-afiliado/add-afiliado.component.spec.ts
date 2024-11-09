import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAfiliadoComponent } from './add-afiliado.component';

describe('AddAfiliadoComponent', () => {
  let component: AddAfiliadoComponent;
  let fixture: ComponentFixture<AddAfiliadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAfiliadoComponent]
    });
    fixture = TestBed.createComponent(AddAfiliadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
