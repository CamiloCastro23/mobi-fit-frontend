import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class AuthCognitoService {

  private clientId = environment.clientId;
  private redirectUri = environment.redirectUri;
  private tokenUrl = environment.tokenUrl;

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
