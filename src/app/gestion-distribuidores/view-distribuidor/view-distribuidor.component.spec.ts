import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDistribuidorComponent } from './view-distribuidor.component';

describe('ViewDistribuidorComponent', () => {
  let component: ViewDistribuidorComponent;
  let fixture: ComponentFixture<ViewDistribuidorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewDistribuidorComponent]
    });
    fixture = TestBed.createComponent(ViewDistribuidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
