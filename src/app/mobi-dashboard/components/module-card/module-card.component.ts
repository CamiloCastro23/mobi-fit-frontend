import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-module-card',
  template: `
<div class="flex w-full h-full rounded-lg shadow-lg overflow-hidden bg-white opacity-100 hover:opacity-90 transition-opacity duration-300" [routerLink]='link'>
  <!-- Imagen vertical a la izquierda -->
  <img [src]="imageUrl" alt="Card Image" class="w-1/3 h-full object-cover rounded-l-lg">

  <!-- Contenido a la derecha -->
  <div class="p-4 w-full">
    <!-- Título con degradado -->
    <h3 class="text-xs xl:text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-emerald-500">{{ title }}</h3>

    <!-- Subtítulo en negrita -->
    <h4 class="text-xs xl:text-lg font-semibold text-gray-600 mb-4">{{ subtitle }}</h4>

    <!-- Descripción justificada -->
    <div class="text-xs xl:text-sm text-gray-700 !important mb-2 text-justify">{{ description }}</div>

    <!-- Íconos apilados horizontalmente -->
    <div class="flex flex-row justify-around items-start gap-x-1 mb-6 text-xs xl:text-base">
      <div class="flex items-center mb-2">
        <span class="material-symbols-rounded text-3xl custom-material-icons" [ngClass]="icon1Color" translate="no">{{ icon1 }}</span>
        <span class="text-xs font-semibold">{{ icon1Value }}</span>
      </div>

      <div class="flex items-center mb-2">
        <span class="material-symbols-rounded text-3xl custom-material-icons" [ngClass]="icon2Color" translate="no">{{ icon2 }}</span>
        <span class="text-xs font-semibold">{{ icon2Value }}</span>
      </div>

      <div class="flex items-center mb-2">
        <span class="material-symbols-rounded text-3xl custom-material-icons" [ngClass]="icon3Color" translate="no">{{ icon3 }}</span>
        <span class="text-xs font-semibold">{{ icon3Value }}</span>
      </div>
    </div>
  </div>
</div>

  `,
  styles: ``
})
export class ModuleCardComponent {
  @Input() link!: string;
  @Input() imageUrl!: string;
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() description!: string;

  @Input() icon1!: string;
  @Input() icon1Value!: string;
  @Input() icon1Color: string = 'text-sky-500';

  @Input() icon2!: string;
  @Input() icon2Value!: string;
  @Input() icon2Color: string = 'text-rose-500';

  @Input() icon3!: string;
  @Input() icon3Value!: string;
  @Input() icon3Color: string = 'text-emerald-500';
}
