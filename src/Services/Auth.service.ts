import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { IUser, IUserResponse } from 'src/app/models/User';
import * as Firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { AutherApiService } from 'src/app/Api/auther-api.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: Observable<IUser>;
  private token: string;
  public isLoading: boolean;

// tslint:disable-next-line:no-shadowed-variable
constructor(private autherApi: AutherApiService, private router: Router ) {
 this.isLoading = false;
  const firebaseConfig = {
    apiKey: 'AIzaSyAL55WRYmO6qmtJFmNMsXaj0i8xNmS8vNg',
    authDomain: 'astoryauthentication.firebaseapp.com',
    databaseURL: 'https://astoryauthentication.firebaseio.com',
    projectId: 'astoryauthentication',
    storageBucket: 'astoryauthentication.appspot.com',
    messagingSenderId: '455029444246',
    appId: '1:455029444246:web:e2511268b70f0079c17cb7',
    measurementId: 'G-4N10QD6P4F'
  };
  // Initialize Firebase
   Firebase.initializeApp(firebaseConfig);
 // Firebase.analytics();
}

userSignIn() {
  this.isLoading = true;
  const provider = new Firebase.auth.GoogleAuthProvider();
  // open google signin window
 Firebase.auth().signInWithPopup(provider).then(result => {
  // The signed-in user info.
  const user = result.user;
  this.isLoading = true;
  result.user.getIdTokenResult().then(t =>  { this.token = t.token; });

  const userLocal: IUser = {
    address : '',
    firstName: user.displayName.split(' ')[0].trim(),
    lastName: user.displayName.split(' ')[1].trim(),
    phoneNumber: user.phoneNumber,
    profilePictureUrl: user.photoURL,
    email: user.email,
    autherId: undefined

  };

 this.autherApi.addUserToDataBase(userLocal).subscribe((users: IUserResponse) => {
  this.isLoading = true;
   this.saveSignInUserToLocalStore(users, this.token, user.refreshToken);
 });


 }).catch(error => {
   this.isLoading = false;
  const errorCode = error.code;
  console.log('errorCode', errorCode);
  const errorMessage = error.message;
  console.log('errorMessage', errorMessage);
  const email = error.email;
  console.log('email', email);
  const credential = error.credential;
  console.log('credential', credential);
 });
}

saveSignInUserToLocalStore(user: IUser, accessToken: string, refreshToken: string) {
localStorage.setItem('user', JSON.stringify(user));
 localStorage.setItem('token', accessToken);
 localStorage.setItem('refreshToken', refreshToken);
 this.isLoading = false;
 this.router.navigate(['/dashboard']);
}


isSignedInUser() {
  if (localStorage.getItem('user') !== null && localStorage.getItem('token') !== null && localStorage.getItem('refreshToken') ) {
    return true;
  } else {
    return false;
  }
}

logout() {
  localStorage.clear();
  this.router.navigate(['/login']);
}

}
