import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CheckboxPageComponent } from './checkbox.component';

describe('CheckboxPageComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [CheckboxPageComponent],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CheckboxPageComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
