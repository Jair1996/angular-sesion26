import { TestBed } from '@angular/core/testing';

import { AuthAuthorizationGuard } from './auth-authorization.guard';

describe('AuthAuthorizationGuard', () => {
  let guard: AuthAuthorizationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthAuthorizationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
