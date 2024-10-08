import { Component } from '@angular/core';

@Component({
  selector: 'app-tutorial-page',
  templateUrl: './tutorial-page.component.html',
  styleUrl: './tutorial-page.component.css'
})
export class TutorialPageComponent {
  targetDate = new Date('2024-10-25');
  title = 'Tutorials Module is Under Construction';
}
