import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DynamicFormComponent } from './dynamic-form.component';

describe('DynamicFormComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [DynamicFormComponent],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(DynamicFormComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
