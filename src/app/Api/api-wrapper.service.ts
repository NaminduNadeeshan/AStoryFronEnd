import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, Subscribable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Token } from '../models/token';
import { Router } from '@angular/router';
import { map, catchError, tap } from 'rxjs/operators';
import { error } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ApiWrapperService {

constructor(private http: HttpClient, private router: Router) {
}

postWrapper<T>(data: T, url: string, isBearer: boolean = true): any {
    const httpOptions = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    })
  };

return this.http.post<T>(`${environment.apiBaseUrl}/${url}`, data, isBearer && httpOptions)
.pipe(tap((response) => {
  return response; }), catchError(errors => {
     if ( errors.status === 401) {
      this.getAccesstokenByRefreshToken<T>('post', url, undefined, data);
  return of(errors);
}
}));

}

getWrapper<T>(url: string, params?: HttpParams): Observable<T> | Observable<unknown> {
  let responseData;
  const httpOptions = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    }),
    params: params
  };
  this.http.get(`${environment.apiBaseUrl}/${url}`, httpOptions).pipe(map(response => { responseData = response; }),
  catchError(errors => {
    if (errors.status === 401) {
      this.getAccesstokenByRefreshToken<T>('get', url, params);

      return of (errors);
  }
  } ));

  return responseData;
}

private getAccesstokenByRefreshToken<T>(method: string, url?: string, params?: HttpParams, bodyData?: T) {

  const formData = new FormData();

  formData.append('grant_type', 'refresh_token');
  formData.append('refresh_token', localStorage.getItem('refreshToken'));

  this.http.post(`${environment.apiBaseUrl}/api/authentication/token`, formData).subscribe((token: Token) => {
    localStorage.setItem('token', token.id_token);
    localStorage.setItem('refreshToken', token.refresh_token);
    if ( method === 'get') {
      this.getWrapper<T>(url, params).subscribe();
    } else if (method === 'post') {
      this.postWrapper<T>(bodyData, url).subscribe();
    }
  }, (errors) => {
   this.logout();
  }
  );

}

private logout() {
  localStorage.clear();
  this.router.navigate(['/login']);
}

}
