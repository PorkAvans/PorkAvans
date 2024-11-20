import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePresaleComponent } from './update-presale.component';

describe('UpdatePresaleComponent', () => {
  let component: UpdatePresaleComponent;
  let fixture: ComponentFixture<UpdatePresaleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatePresaleComponent]
    });
    fixture = TestBed.createComponent(UpdatePresaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
