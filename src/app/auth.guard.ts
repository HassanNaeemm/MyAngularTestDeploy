import { CanActivateFn } from '@angular/router';
import { AuthserviceService } from './authservice.service';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthserviceService);
  const router = inject(Router);
  if(authService.token === true)
  {
  
    return true;
  }
  else
  {
    router.navigate(['/login']);
    return false;
  }
};
