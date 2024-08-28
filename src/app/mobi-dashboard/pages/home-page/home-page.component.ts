import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthCognitoService } from '../../services/auth-cognito.service';
import { environment } from '../../../../environments/environments';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthCognitoService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const code = params['code'];
      if (code) {
        this.authService.getToken(code).subscribe({
          next: (response) => {
            const accessToken = response.access_token;
            const idToken = response.id_token;
            const refreshToken = response.refresh_token;

            localStorage.setItem('access_token', accessToken);
            localStorage.setItem('id_token', idToken);
            localStorage.setItem('refresh_token', refreshToken);
          },
          error: (error) => {
            window.location.href = environment.authUrl;
          }
        });
      }
    });
  }
}
