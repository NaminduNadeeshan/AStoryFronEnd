import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { Observable, of, Subscribable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IToken } from '../models/token';
import { Router } from '@angular/router';
import { map, catchError, tap } from 'rxjs/operators';
import { error } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ApiWrapperService {

constructor(private http: HttpClient, private router: Router) {
}

public getAccesstokenByRefreshToken(): Observable<IToken> {

  const formData = new FormData();

  formData.append('grant_type', 'refresh_token');
  formData.append('refresh_token', localStorage.getItem('refreshToken'));

  return this.http.post<IToken>(`${environment.apiBaseUrl}/api/authentication/token`, formData);
}

public logout() {
  localStorage.clear();
  this.router.navigate(['/login']);
}

}
