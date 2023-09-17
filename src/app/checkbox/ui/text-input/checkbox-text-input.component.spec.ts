import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxTextInputComponent } from './checkbox-text-input.component';

describe('CheckboxTextInputComponent', () => {
  let component: CheckboxTextInputComponent;
  let fixture: ComponentFixture<CheckboxTextInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CheckboxTextInputComponent],
    });
    fixture = TestBed.createComponent(CheckboxTextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
