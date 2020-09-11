import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiWrapperService {
constructor(private http: HttpClient) {
}

post<T>(data: T, url: string, isBearer: boolean = true): Observable<T> {
  let responseData;
    const httpOptions = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    })
  };
  this.http.post(`${environment.apiBaseUrl}/${url}`, data, 
  isBearer && httpOptions).subscribe(response => { responseData = response; }, (error) => {
    console.log('error', error);
  });

  return responseData;
}

}
