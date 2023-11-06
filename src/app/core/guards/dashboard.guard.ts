import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const dashboardGuard: CanActivateFn = (route, state) => {

    const router = inject (Router);
    const tokenValid = false;

    return tokenValid ? router.createUrlTree(['/home']) : true;

};
