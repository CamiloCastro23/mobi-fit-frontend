import { Component, OnInit } from '@angular/core';
// Si decides usar la biblioteca, importa jwtDecode
import { jwtDecode } from "jwt-decode";

@Component({
  selector: 'app-topbar',
  template: `
    <div class="w-full h-full flex justify-end items-center p-4">
      <div class="flex items-center space-x-4">
        <div class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-300 cursor-pointer">
          <span class="material-symbols-rounded text-gray-600 text-2xl lg:text-3xl" translate="no" routerLink="/dashboard/support">
            support_agent
          </span>
        </div>
        <div class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-300 cursor-pointer">
          <span class="material-symbols-rounded text-gray-600 text-2xl lg:text-3xl" translate="no" routerLink="/dashboard/settings">
            settings
          </span>
        </div>
        <div class="text-sm text-gray-700 font-semibold">
          {{ userEmail }}
        </div>
        <span class="material-symbols-rounded text-gray-600 text-4xl lg:text-5xl" translate="no">
          account_circle
        </span>
      </div>
    </div>
  `,
  styles: []
})
export class TopbarComponent implements OnInit {
  userEmail: string | null = '';

  ngOnInit() {
    this.decodeToken();
  }

  decodeToken() {
    const token = localStorage.getItem('id_token');
    if (token) {
      try {
        const decodedToken: any = jwtDecode(token);
        this.userEmail = decodedToken.email || 'No email found';
      } catch (error) {
        console.error('Error decoding token:', error);
        this.userEmail = 'Invalid token';
      }
    } else {
      this.userEmail = 'Token not found';
    }
  }
}
