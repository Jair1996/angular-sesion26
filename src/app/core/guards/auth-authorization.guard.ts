import { Injectable } from '@angular/core';
import { CanActivate, CanMatch, Router } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthAuthorizationGuard implements CanActivate, CanMatch {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> | boolean {
    return this.authService.verifyAuthentication().pipe(
      map((resp) => !resp),
      tap((isNotAuthenticated) => {
        if (!isNotAuthenticated) {
          this.router.navigate(['./dashboard/home']);
        }
      })
    );
  }
  canMatch(): Observable<boolean> | boolean {
    return this.authService.verifyAuthentication().pipe(
      map((resp) => !resp),
      tap((isNotAuthenticated) => {
        if (!isNotAuthenticated) {
          this.router.navigate(['./dashboard/home']);
        }
      })
    );
  }
}
