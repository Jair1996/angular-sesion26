import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styles: [],
})
export class HomePageComponent implements OnInit {
  userLogged!: User;

  ngOnInit(): void {
    this.userLogged = JSON.parse(localStorage.getItem('user')!);
  }
}
