import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthCognitoService } from '../../services/auth-cognito.service';

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

            console.log('Access Token:', accessToken);
            console.log('ID Token:', idToken);
            console.log('Refresh Token:', refreshToken);
          },
          error: (error) => {
            console.error('Error al obtener los tokens:', error);
          }
        });
      }
    });
  }
}
