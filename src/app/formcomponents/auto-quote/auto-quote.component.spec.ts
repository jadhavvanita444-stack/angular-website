import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoQuoteComponent } from './auto-quote.component';

describe('AutoQuoteComponent', () => {
  let component: AutoQuoteComponent;
  let fixture: ComponentFixture<AutoQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoQuoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
