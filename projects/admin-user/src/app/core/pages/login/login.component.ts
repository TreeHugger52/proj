import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  submit: boolean | undefined;

  loginForm = this.fb.group({
    userID: ['', Validators.required],
    pin: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private db: LoginService,
    private router: Router
  ) {}

  login() {
    let userInfo: any = [];

    this.submit = true;
    if (this.loginForm.invalid && this.submit) {
      return;
    }
    this.db
      .login(this.loginForm.value)
      .pipe(first())
      .subscribe({
        next: () => {
          console.log('login successful!');
          userInfo = this.db.userData;

          this.router.navigate(['./admin/database']);
        },
      });
  }

  ngOnInit(): void {}
}
