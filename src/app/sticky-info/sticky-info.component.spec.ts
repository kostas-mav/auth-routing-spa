import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyInfoComponent } from './sticky-info.component';

describe('StickyInfoComponent', () => {
  let component: StickyInfoComponent;
  let fixture: ComponentFixture<StickyInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StickyInfoComponent]
    });
    fixture = TestBed.createComponent(StickyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
