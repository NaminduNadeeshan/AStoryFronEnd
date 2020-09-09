import { Injectable, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/Services/Auth.service';

@Injectable({
  providedIn: 'any'
})
export class AuthGurdService implements CanActivate, OnInit {
// private router: Router;

public router: Router;
constructor(router: Router, private authService: AuthService) {
  this.router = router;
}
  ngOnInit(): void {

  }

  canActivate(): boolean {
    if (this.authService.isSignedInUser()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}
