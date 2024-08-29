import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environments';
import * as jose from 'jose';
import axios from 'axios';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthCognitoService {

  private clientId = environment.clientId;
  private redirectUri = environment.redirectUri;
  private tokenUrl = environment.tokenUrl;
  private jwksUrl = environment.jwksUrl;
  private location?: Location;

  constructor(private http: HttpClient) { }

  getToken(code: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const body = new HttpParams()
      .set('grant_type', 'authorization_code')
      .set('client_id', this.clientId)
      .set('redirect_uri', this.redirectUri)
      .set('code', code);

    return this.http.post(this.tokenUrl, body.toString(), { headers });
  }

  checkAuth(): Observable<boolean> {
    const token = localStorage.getItem('access_token');
    if (!token && window.location.href.includes('code')) {
      return of(true);
    } else if(token) {
      return this.validateToken(token);
    }
    window.location.href = environment.authUrl;
    return of(false);
  }

  validateToken(token: string): Observable<boolean> {
    let autenticated = this.getAutentication(token);
    autenticated.subscribe(value => {
    });
    return autenticated;
  }

  getAutentication(token: string): Observable<boolean> {
    return new Observable<boolean>(observer => {
      if (!token) {
        observer.next(false);
        observer.complete();
        return;
      }

      axios.get(this.jwksUrl)
        .then(response => {
          const jwks = response.data;
          const decodedHeader: any = jose.decodeProtectedHeader(token);

          const kid = decodedHeader.kid;
          const signingKey = jwks.keys.find((key: any) => key.kid === kid);

          if (!signingKey) {
            observer.next(false);
            observer.complete();
            return;
          }
          jose.importJWK(signingKey, 'RS256').then(publicKey => {
            jose.jwtVerify(token, publicKey, { algorithms: ['RS256'] })
              .then(() => {
                observer.next(true);
                observer.complete();
              })
              .catch(err => {
                observer.next(false);
                observer.complete();
              });
          }).catch(() => {
            observer.next(false);
            observer.complete();
          });
        })
        .catch(() => {
          observer.next(false);
          observer.complete();
        });
    });
  }
}
