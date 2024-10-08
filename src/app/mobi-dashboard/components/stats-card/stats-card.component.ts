import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stats-card',
  template: `
    <div class="relative bg-white shadow-lg rounded-2xl w-full h-full opacity-100 hover:opacity-70 transition-opacity duration-300 overflow-hidden">
      <div class="flex w-full h-3/5 p-4 space-x-4 items-center">
        <div class="bg-sky-400 rounded-xl w-16 h-16 flex items-center justify-center transition duration-500 hover:bg-sky-700">
          <span class="material-symbols-rounded text-white text-4xl custom-material-icons" translate="no">{{ icon }}</span>
        </div>
        <h3 class="text-lg font-light text-gray-600 sm:text-sm">{{ title }}: </h3>
        <div class="text-2xl font-normal text-sky-600 sm:text-lg">
            {{ value }}
            <div class="inline-flex items-baseline rounded-full bg-green-100 px-2.5 text-sm font-medium text-green-800">
              <svg class="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z" clip-rule="evenodd" />
              </svg>
              12%
            </div>
          </div>
      </div>
      <div class="flex w-full h-2/5 bg-gray-100 rounded rounded-b-2xl items-center justify-center">
        <div class="text-base font-extralight text-sky-400">
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

