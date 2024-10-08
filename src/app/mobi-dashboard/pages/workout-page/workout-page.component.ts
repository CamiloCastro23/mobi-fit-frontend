import { Component } from '@angular/core';

@Component({
  selector: 'app-workout-page',
  templateUrl: './workout-page.component.html',
  styleUrl: './workout-page.component.css'
})
export class WorkoutPageComponent {
  targetDate = new Date('2024-12-11');
  title = 'Workout Module is Under Construction';
}
