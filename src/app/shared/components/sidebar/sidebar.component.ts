import { Component } from '@angular/core';
import { AuthCognitoService } from '../../../mobi-dashboard/services/auth-cognito.service';

interface Item {
  icon: string;
  text: string;
  url: string;
}

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styles: ``
})
export class SidebarComponent {
  menuItems: Item[] = [
    { icon: 'home', text: 'Home', url: './home'},
    { icon: 'person', text: 'Users', url: './users'},
    { icon: 'nutrition', text: 'Diet', url: 'diet'},
    { icon: 'exercise', text: 'Workout', url: 'workout'},
    { icon: 'school', text: 'Tutorials', url: 'tutorial'},
    { icon: 'support_agent', text: 'Support', url: 'support'},
    { icon: 'settings', text: 'Settings', url: 'settings'}

  ];

  selectedItem: Item | null = null;

  selectItem(item: Item) {
    this.selectedItem = item;
  }

  isMenuOpen = false;
  isLargeScreen = false;

  constructor(
    private authCognitoService: AuthCognitoService
  ) {
    this.checkScreenSize();
    window.onresize = () => this.checkScreenSize();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  checkScreenSize() {
    this.isLargeScreen = window.innerWidth >= 768;
  }

  logout() {
    this.authCognitoService.logout();
  }
}
