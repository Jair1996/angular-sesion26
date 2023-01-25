import { TestBed } from '@angular/core/testing';

import { DashboarAuthorizationGuard } from './dashboar-authorization.guard';

describe('DashboarAuthorizationGuard', () => {
  let guard: DashboarAuthorizationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DashboarAuthorizationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
