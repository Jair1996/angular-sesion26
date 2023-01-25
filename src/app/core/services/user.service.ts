import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly url: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getUser(id: string): Observable<User> {
    return this.http.get<User>(`${this.url}/${id}`).pipe(catchError(() => of({} as User)));
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  getUserByUsernameAndEmail(username: string, email: string): Observable<User | null> {
    return this.getAllUsers().pipe(
      map((users) => {
        const user = users.find(
          (user) =>
            user.username.toLowerCase() === username.toLowerCase() &&
            user.email.toLowerCase() === email.toLowerCase()
        );

        if (user) return user;

        return null;
      })
    );
  }
}
