import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map, take } from 'rxjs';
import { UserService } from 'src/app/presentation/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(
    private authService: UserService,
    private router: Router
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean>  {
      return this.authService.isAuthenticated$.pipe(
        take(1),
        map(isAuthenticated => {
          if (!isAuthenticated) {
            this.router.navigate(['/login']);
            return false;
          }
          return true;
        })
      );
  }

}
