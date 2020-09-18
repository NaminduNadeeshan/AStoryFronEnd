import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse, HttpClient
} from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { ApiWrapperService } from './api-wrapper.service';
import { tap, retry, switchMap, catchError, filter, take } from 'rxjs/operators';
import { IToken } from '../models/token';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {


  private isRefreshing = false;

  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  tokenSubject: Subject<any> = new Subject<boolean>();

  constructor(private authWrap: ApiWrapperService, private http: HttpClient) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (localStorage.getItem('token')) {
      request = this.AddToken(request, localStorage.getItem('token'));
    }

    return next.handle(request).pipe(catchError(errors => {
      if (errors instanceof HttpErrorResponse && errors.status === 401) {
        return this.handle401Error(request, next);
      } else {
        return throwError(errors);
      }
    }));
  }

  handle401Error(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    if (!this.isRefreshing) {
      this.isRefreshing = true;

      this.refreshTokenSubject.next(null);

      return this.authWrap.getAccesstokenByRefreshToken().pipe(
        switchMap((token: IToken) => {
          this.isRefreshing = false;
          this.refreshTokenSubject.next(token.id_token);

          localStorage.setItem('token', token.id_token);
          localStorage.setItem('refreshToken', token.refresh_token);

          return next.handle(this.AddToken(request, token.id_token));
        }), catchError(errors => {
          this.authWrap.logout();
          return throwError(errors);
        })
      );

    } else {
      return this.refreshTokenSubject.pipe(filter(token => (token?.id_token !== null && token?.refresh_token !== null)),
        take(1),
        switchMap(token => {
          return next.handle(this.AddToken(request, token.id_token));
        })
      );
    }
  }

  private AddToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        'Authorization': `Bearer ${token}`
      }
    });
  }

  private requetRefreshToken() {
    this.authWrap.getAccesstokenByRefreshToken().subscribe((token: IToken) => {
      localStorage.setItem('token', token.id_token);
      localStorage.setItem('refreshToken', token.refresh_token);
      this.tokenSubject.next(token);
    }, (errors) => {
      Swal.fire(
        'Session Expired',
        'We are redirecting you to signin Page, Please Signin.',
        'error'
      );
      this.authWrap.logout();
    }

    );
  }

}
