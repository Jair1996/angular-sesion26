import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: [],
})
export class LoginPageComponent {
  showSpinner: boolean = false;

  loginForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {}

  isTheFieldInvalid(campo: string) {
    return this.loginForm.controls[campo].errors && this.loginForm.controls[campo].dirty;
  }

  login() {
    const { username, password } = this.loginForm.value;

    this.authService.login(username, password).subscribe((data) => {
      if (!data) {
        console.log('usuario y contaseña incorecta');
        return;
      }

      this.router.navigate(['/dashboard/home']);
    });
  }
}
