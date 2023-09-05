import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EateriesComponent } from './eateries.component';

describe('EateriesComponent', () => {
  let component: EateriesComponent;
  let fixture: ComponentFixture<EateriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EateriesComponent]
    });
    fixture = TestBed.createComponent(EateriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
