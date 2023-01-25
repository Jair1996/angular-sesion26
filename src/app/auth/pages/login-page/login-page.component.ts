import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: [],
})
export class LoginPageComponent {
  loading: boolean = false;

  loginForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {}

  isTheFieldInvalid(campo: string) {
    return this.loginForm.controls[campo].errors && this.loginForm.controls[campo].dirty;
  }

  login() {
    this.loading = true;

    const { username, password } = this.loginForm.value;

    this.authService
      .login(username, password)
      .pipe(
        tap((_) => {
          this.loading = false;
        })
      )
      .subscribe((data) => {
        if (!data) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Usuario o contraseña incorrecta',
          });
          return;
        }

        this.router.navigate(['/dashboard/user/list']);
      });
  }
}
