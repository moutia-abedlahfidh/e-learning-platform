import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { MyserviceService } from './myservice.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(MyserviceService) ;
  const router = inject(Router) ;

  if (authService.isLoggedIn()) {
    return true;  
  } else {
    router.navigate(['/login']);  
    return false;
  }
};
