import { Component } from '@angular/core';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrl: './settings-page.component.css'
})
export class SettingsPageComponent {
  targetDate = new Date('2024-11-15');
  title = 'Setting Module is Under Construction';
}
