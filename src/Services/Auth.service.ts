import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { IUser } from 'src/app/models/User';
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

// tslint:disable-next-line:no-shadowed-variable
constructor(private autherApi: AutherApiService, private router: Router ) {

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
  const provider = new Firebase.auth.GoogleAuthProvider();
  // open google signin window
 Firebase.auth().signInWithPopup(provider).then(result => {
  // The signed-in user info.
  const user = result.user;
  console.log('user', result);

  result.user.getIdTokenResult().then(t =>  { this.token = t.token; });

  const userLocal: IUser = {
    Address : '',
    FirstName: user.displayName.split(' ')[0],
    LastName: user.displayName.split(' ')[1],
    PhoneNumber: user.phoneNumber,
    ProfilePictureUrl: user.photoURL,
    Email: user.email,
    AutherId: undefined

  };

 this.autherApi.addUserToDataBase(userLocal).subscribe((users: any) => {
   this.saveSignInUserToLocalStore(users, this.token, user.refreshToken);
 });


 }).catch(error => {
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
 this.router.navigate(['/dashboard']);
}

isSignedInUser() {
  if (localStorage.getItem('user') !== null && localStorage.getItem('token') !== null && localStorage.getItem('refreshToken') ) {
    return true;
  } else {
    return false;
  }
}

}
