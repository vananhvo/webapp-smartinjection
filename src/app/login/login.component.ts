import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  template: `
    <div class="login-container">
      <div class="login-content">
        <mat-toolbar class="login-toolbar" color="primary">Smart Injection</mat-toolbar>
        <mat-card>
          <form [formGroup]="loginForm" novalidate (ngSubmit)="onSubmit()">
            <mat-form-field>
              <mat-icon matPrefix>person_outline</mat-icon>
              <input autofocus type="text" matInput placeholder="Username" formControlName="username">
            </mat-form-field>

            <mat-form-field>
              <mat-icon matPrefix>lock_outline</mat-icon>
              <input type="password" autocomplete="false" matInput placeholder="Password" formControlName="password">
            </mat-form-field>

            <button type="submit" mat-raised-button color="primary">Login</button>
          </form>
        </mat-card>
      </div>
    </div>
  `,
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {

  loginForm = this.fb.group({
    username: [null],
    password: [null]
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {

  }

}
