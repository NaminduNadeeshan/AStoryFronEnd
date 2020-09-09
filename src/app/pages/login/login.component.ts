import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/Services/Auth.service';
import * as Firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

public auth: AuthService;
  constructor(auth: AuthService) {
    this.auth = auth;
  }

  ngOnInit() {
  }

  loginUser() {
   this.auth.userSignIn();
  }
}
