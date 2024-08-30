import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stats-card',
  template: `
    <div class="relative bg-white shadow-lg rounded-2xl h-full opacity-100 hover:opacity-75 transition-opacity duration-300">
      <div class="flex flex-row px-6 py-3 space-x-4 items-center">
        <div class="bg-sky-400 rounded-xl w-16 h-16 flex items-center justify-center transition duration-500 hover:bg-sky-700">
          <span class="material-symbols-rounded text-white text-4xl custom-material-icons" translate="no">{{ icon }}</span>
        </div>
        <div class="flex flex-col flex-grow">
          <h3 class="text-lg font-light leading-6 text-gray-600">{{ title }}</h3>
          <p class="text-2xl font-normal text-sky-600">{{ value }}</p>
        </div>
        <!-- Ajuste para el badge del 12% -->
        <div class="inline-flex items-baseline rounded-full bg-green-100 px-2.5 py-0.5 text-sm font-medium text-green-800 ml-auto">
          <svg class="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z" clip-rule="evenodd" />
          </svg>
          <span class="sr-only">Increased by</span> 12%
        </div>
      </div>

      <!-- Div que quieres ubicar en el fondo -->
      <div class="absolute bottom-0 w-full flex flex-row items-center justify-center bg-gray-100 rounded-b-2xl">
        <div class="text-base font-extralight text-sky-400 py-4">
          last 30 days
        </div>
      </div>
    </div>
  `,
  styles: `
  `
})
export class StatsCardComponent {
  @Input()
  icon!: string;

  @Input()
  title!: string;

  @Input()
  value!: string;
}

