import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthCognitoService } from '../services/auth-cognito.service';
import { catchError, map, of } from 'rxjs';
import { environment } from '../../../environments/environments';

export const authCognitoActivateGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthCognitoService);

  return authService.checkAuth().pipe(
      map(isAuthenticated => {
          if (isAuthenticated) {
              return true;
          } else {
              localStorage.clear();
              window.location.href = environment.authUrl;
              return false;
          }
      }),
      catchError(() => {
          localStorage.clear();
          window.location.href = environment.authUrl;
          return of(false);
      })
  );
};
