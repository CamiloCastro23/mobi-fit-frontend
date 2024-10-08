import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-under-construction-page',
  template: `
    <main class="h-full w-full grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
      <!-- Contenedor de texto -->
      <div class="flex flex-col justify-center bg-white px-8 py-32 lg:px-16 lg:py-48">
        <div class="text-center lg:text-left">
          <h1 class="mt-4 text-5xl font-bold tracking-tight text-gray-900 sm:text-5xl">{{ title }}</h1>
          <p class="mt-6 text-xl leading-7 text-gray-600">We are working hard to bring you the best experience. Please check back soon!</p>

          <!-- Contenedor separado para el temporizador con translate="no" -->
          <div class="mt-10 flex items-center justify-center lg:justify-start gap-x-10">
            <!-- Etiquetas de tiempo -->
            <div class="text-center">
              <div class="text-4xl font-semibold text-gray-700 sm:text-2xl">"Days</div> <!-- Tamaño mayor para los títulos -->
              <div class="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-cyan-500 to-emerald-500" translate="no">{{ days }}</div> <!-- Números con degradado -->
            </div>
            <div class="text-center">
              <div class="text-4xl font-semibold text-gray-700 sm:text-2xl">Hours</div>
              <div class="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-cyan-500 to-emerald-500" translate="no">{{ hours }}</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-semibold text-gray-700 sm:text-2xl">Minutes</div>
              <div class="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-cyan-500 to-emerald-500" translate="no">{{ minutes }}</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-semibold text-gray-700 sm:text-2xl">Seconds "</div>
              <div class="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-cyan-500 to-emerald-500" translate="no">{{ seconds }}</div>
            </div>
          </div>

          <p class="mt-8 text-sm text-gray-500">Coming soon: <span class="font-semibold">{{ completionDate | date: 'longDate' }}</span></p>
        </div>
      </div>

      <!-- Contenedor de imagen -->
      <div class="flex relative h-full w-full overflow-hidden bg-white items-center justify-center">
        <img src="assets/under-construction.webp" alt="Under Construction" class="h-3/5 w-3/5 object-contain" />
      </div>
    </main>
  `,
  styles: []
})
export class UnderConstructionPageComponent {
  @Input() completionDate!: Date;
  @Input() title!: string;

  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  ngOnInit() {
    this.updateCountdown();
    setInterval(() => this.updateCountdown(), 1000);
  }

  updateCountdown() {
    const currentDate = new Date().getTime();
    const targetDate = new Date(this.completionDate).getTime();
    const timeDifference = targetDate - currentDate;

    this.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  }
}
