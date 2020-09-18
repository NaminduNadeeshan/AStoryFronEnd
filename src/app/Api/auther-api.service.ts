import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../models/User';
import { environment } from 'src/environments/environment';
import { ApiWrapperService } from './api-wrapper.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutherApiService {
constructor(private _http: HttpClient, private wrapperHttp: ApiWrapperService) {
}

addUserToDataBase(user: IUser): Observable<IUser> {
return this._http.post<IUser>(`${environment.apiBaseUrl}/api/auther/AddAuther`, user);
}

editAuther(user: IUser): any {
 return this._http.post<IUser>(`${environment.apiBaseUrl}/api/auther/EditAuther`, user);
}

}
