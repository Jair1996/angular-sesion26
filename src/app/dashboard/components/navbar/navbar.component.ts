import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [],
})
export class NavbarComponent {
  constructor(private router: Router, private authService: AuthService) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}
