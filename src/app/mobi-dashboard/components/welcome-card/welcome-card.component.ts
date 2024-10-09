import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-card',
  template: `
    <div class="flex relative overflow-hidden bg-gray-900 shadow-xl w-full h-full px-6 py-12 rounded-2xl opacity-100 hover:opacity-90 transition-opacity duration-300">
      <img class="absolute inset-0 h-full w-full object-cover brightness-150 saturate-0" src="assets/NeuralNetworks.png" alt="Neural Networks Background">
      <div class="absolute inset-0 bg-gray-900/90 mix-blend-multiply"></div>
      <div class="absolute -left-80 -top-56 transform-gpu blur-3xl" aria-hidden="true">
        <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-sky-400 to-sky-900 opacity-[0.45]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
      </div>
      <div class="hidden md:absolute md:bottom-16 md:left-[50rem] md:block md:transform-gpu md:blur-3xl" aria-hidden="true">
        <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-sky-400 to-sky-900 opacity-25" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
      </div>
      <div class="relative mx-auto max-w-2xl lg:mx-0">
        <div class="flex items-center space-x-4">
          <h1 class="text-xl font-normal text-white md:text-4xl sm:leading-tight">
            Welcome to Mobi
          </h1>
          <img class="h-8 w-8 sm:h-12 sm:w-12" src="assets/mobi-logo.png" alt="Mobi Logo">
        </div>
        <p class="mt-2 text-xl font-light text-white md:text-xl sm:leading-8">
          "Transform your health journey with Mobi - the ultimate app for creating personalized diets and workout plans, all powered by cutting-edge Artificial Intelligence"
        </p>
      </div>
    </div>
  `,
  styles: ``
})
export class WelcomeCardComponent {

}
