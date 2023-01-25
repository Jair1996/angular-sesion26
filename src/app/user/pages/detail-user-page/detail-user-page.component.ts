import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { User } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-detail-user-page',
  templateUrl: './detail-user-page.component.html',
  styles: [],
})
export class DetailUserPageComponent implements OnInit {
  userId: string = '';
  user!: User;
  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('userId')!;

    this.userService
      .getUser(this.userId)
      .pipe(
        tap((_) => {
          this.loading = false;
        })
      )
      .subscribe((user) => {
        this.user = user;
      });
  }

  goBack() {
    this.location.back();
  }
}
