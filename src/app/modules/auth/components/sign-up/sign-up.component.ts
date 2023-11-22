import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  constructor(private fb: FormBuilder){}
  signUp: FormGroup = this.fb.group({
    firstName: [null, [Validators.required, Validators.pattern(/^\w{3,}$/)]],
    email: [null, [Validators.required, Validators.pattern(/\S+\@[a-zA-Z0-9]{2,}\.[a-zA-Z]{2,3}$/)]],
    password: [null, [Validators.required, Validators.pattern(/^[A-Za-z0-9]{5,}$/)]],
    confirmPassword: [null, [Validators.required]],
    privacyTerms: [null, [Validators.required]]
  }, {updateOn: 'change'})
  submit(form: FormGroup): void {
    if(form.valid && (form.get('confirmPassword')?.value === form.get('password')?.value))
      console.log(form.value)
  }
}
