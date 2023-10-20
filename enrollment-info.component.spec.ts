import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentInfoComponent } from './enrollment-info.component';

describe('EnrollmentInfoComponent', () => {
  let component: EnrollmentInfoComponent;
  let fixture: ComponentFixture<EnrollmentInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnrollmentInfoComponent]
    });
    fixture = TestBed.createComponent(EnrollmentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
