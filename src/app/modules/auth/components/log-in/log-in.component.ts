import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [SharedModule, ReactiveFormsModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss'
})
export class LogInComponent {
  constructor(private fb: FormBuilder){}
  logIn: FormGroup = this.fb.group({
    email: [null, [Validators.required, Validators.pattern(/\S+\@[a-zA-Z0-9]{2,}\.[a-zA-Z]{2,3}$/)]],
    password: [null, [Validators.required, Validators.pattern(/^[A-Za-z0-9]{5,}$/)]]
  }, {updateOn: 'change'})
  submit(form: FormGroup): void {
    if(form.valid)
      console.log(form.value)
  }
}
