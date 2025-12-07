import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-auto-quote',
  templateUrl: './auto-quote.component.html',
  styleUrls: ['./auto-quote.component.scss']
})
export class AutoQuoteComponent {
  submitted = false;

  constructor(private fb: FormBuilder) {}

  quoteForm = this.fb.group({
    wordcount: ['', [Validators.required, Validators.min(1)]],
    email: ['', [Validators.required, Validators.email]],
    phone: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[0-9]{10}$/), // 10-digit phone
      ],
    ],
    customerType: ['new', Validators.required], // default "New"
  });

  submitQuote() {
    debugger
    if (this.quoteForm.invalid) {
      this.quoteForm.markAllAsTouched();
      return;
    }

    console.log('Form data:', this.quoteForm.value);

    // here you would call your API

    this.submitted = true; // show Thank You block
  }
}
