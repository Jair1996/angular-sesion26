import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { User } from '../models/user.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private userService: UserService) {}

  login(username: string, password: string): Observable<User | null> {
    return this.userService.getUserByUsernameAndEmail(username, password).pipe(
      tap((data) => {
        if (data) {
          localStorage.setItem('user', JSON.stringify(data));
        }
      })
    );
  }

  logout() {
    localStorage.removeItem('user');
  }

  verifyAuthentication(): Observable<boolean> {
    if (localStorage.getItem('user')) {
      return of(true);
    }

    return of(false);
  }
}
