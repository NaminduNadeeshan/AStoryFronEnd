import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/User';
import { AuthService } from 'src/Services/Auth.service';
import { Router } from '@angular/router';
import { AutherApiService } from 'src/app/Api/auther-api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public user: IUser;
  public userForm: FormGroup;
  isLoading = false;

  constructor(private authService: AuthService, private router: Router,
    private apicall: AutherApiService, private formBuilder: FormBuilder) {
      this.isLoading = false;
    this.userForm = formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      address: [''],
      phoneNumber: [''],
      autherId: [''],
      profilePictureUrl: ['']
    });
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));

    if (!this.authService.isSignedInUser()) {
      this.router.navigate(['/login']);
    }
    this.userForm.patchValue(this.user);
  }

  update() {
    const user: IUser = this.userForm.value;
    this.isLoading = true;
 this.apicall.editAuther(user).subscribe(res => { localStorage.setItem('user', JSON.stringify(res));
 Swal.fire(
  'Profile Updated Successful',
  '',
  'success'
);
this.isLoading = false;
this.user = JSON.parse(localStorage.getItem('user'));
}, (error) => {
  console.log('error', error);
  this.isLoading = false;
});
  }

}
