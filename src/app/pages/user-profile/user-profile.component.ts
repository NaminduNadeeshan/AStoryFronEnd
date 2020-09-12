import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/User';
import { AuthService } from 'src/Services/Auth.service';
import { Router } from '@angular/router';
import { AutherApiService } from 'src/app/Api/auther-api.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public user: IUser;
  constructor(private authService: AuthService, private router: Router, private apicall: AutherApiService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    if (!this.authService.isSignedInUser()) {
      this.router.navigate(['/login']);
    }

    this.update();
  }

  update() {
    const user = localStorage.getItem('user');
   // this.apicall.addUserToDataBase(JSON.parse(user))?.subscribe(response => console.log('response', response));
  }

}
