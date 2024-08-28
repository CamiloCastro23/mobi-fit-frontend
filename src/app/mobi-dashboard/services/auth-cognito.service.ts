import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthCognitoService {

  private clientId = '7s6lqebt95v3tusphhogg6oajl';
  private redirectUri = 'http://localhost:4200/';
  private tokenUrl = 'https://auth.mobi-ai.com/oauth2/token';

  constructor(private http: HttpClient) {}

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
}
