import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../models/User';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AutherApiService {

constructor(private _http: HttpClient) {
}

addUserToDataBase(user: IUser): Observable<IUser> {
return this._http.post<IUser>(`${environment.apiBaseUrl}/api/auther/AddAuther`, user);
}

}
