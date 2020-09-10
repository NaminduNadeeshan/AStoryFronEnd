import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/Services/Auth.service';
import * as Firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) {
    this.auth = auth;
  }

  ngOnInit() {
    if (this.auth.isSignedInUser()) {
      this.router.navigate(['/dashboard']);
    }
  }

  loginUser() {
   this.auth.userSignIn();
  }
}
