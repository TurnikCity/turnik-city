import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AUTH_CONST, AuthStorage } from 'app/data';

@Injectable({
  providedIn: 'root',
})
export class AppHttpInterceptor implements HttpInterceptor {
  private readonly authStorage: AuthStorage;

  constructor(private router: Router) {
    this.authStorage = new AuthStorage();
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req.clone();

    if (req.headers.has(AUTH_CONST.HTTP_SKIP_PREFIX) || req.url.includes('blob.core.windows.net')) {
      const headers = req.headers.delete(AUTH_CONST.HTTP_SKIP_PREFIX);
      const directRequest = req.clone({ headers });
      return next.handle(directRequest);
    }

    if (this.authStorage.TokenInfo.token) {
      let headers = new HttpHeaders();
      headers = headers.append(
        'Authorization',
        `${this.authStorage.TokenInfo.tokenType} ${this.authStorage.TokenInfo.token}`
      );
      headers = headers.append('Access-Control-Allow-Origin', '*');
      authReq = req.clone({ headers });
    }

    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401) {
          this.router.navigate(['/login']).then(() => this.authStorage.clearStorageInfo());
        }

        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          // console.error('An error occurred:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          // console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
        return new Observable<HttpEvent<any>>();
      })
    );
  }
}