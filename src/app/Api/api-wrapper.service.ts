import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Token } from '../models/token';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiWrapperService {

constructor(private http: HttpClient, private router: Router) {
}

postWrapper<T>(data: T, url: string, isBearer: boolean = true): Observable<T> {
  let responseData;
    const httpOptions = {
    headers: new HttpHeaders({
      'Authorization': isBearer && `Bearer ${localStorage.getItem('token')}`,
    })
  };
  this.http.post(`${environment.apiBaseUrl}/${url}`, data).subscribe(response => { responseData = response; }, (error) => {
    console.log('error', error);
    if ( error.status === 401) {
      this.getAccesstokenByRefreshToken<T>('post', url, undefined, data);
    }
  });

  return responseData;
}

getWrapper<T>(url: string, params?: HttpParams): Observable<T> | Observable<unknown> {
  let responseData;
  const httpOptions = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    }),
    params: params
  };

  this.http.get(`${environment.apiBaseUrl}/${url}`, httpOptions).subscribe(response => { responseData = response; }, (error => {
    console.log('error', error);
    if (error.status === 401) {
        this.getAccesstokenByRefreshToken<T>('get', url, params);
    } else {

    }
    responseData = error;
  }));

  return responseData;
}

getAccesstokenByRefreshToken<T>(method: string, url?: string, params?: HttpParams, bodyData?: T) {

  const formData = new FormData();

  formData.append('grant_type', 'refresh_token');
  formData.append('refresh_token', localStorage.getItem('refreshToken'));
  console.log('formdata', formData);

  this.http.post(`${environment.apiBaseUrl}/api/authentication/token`, formData).subscribe((token: Token) => {
    localStorage.setItem('token', token.id_token);
    localStorage.setItem('refreshToken', token.refresh_token);
    if ( method === 'get') {
      this.getWrapper<T>(url, params);
    } else if (method === 'post') {
      this.postWrapper<T>(bodyData, url);
    }
  }, (error) => {
   this.logout();
  }
  );

}

logout() {
  localStorage.clear();
  this.router.navigate(['/login']);
}

}
