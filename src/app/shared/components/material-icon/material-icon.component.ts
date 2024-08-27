import { Component, Input } from '@angular/core';


@Component({
  selector: 'material-icon',
  template: `
    <div class="flex items-center justify-center w-full">
    <button
        class="hover:bg-slate-50 rounded-full p-1"
        [matTooltip]="text"
        matTooltipPosition="right"
        aria-label="text">
        <span
         class="material-symbols-rounded text-gray-600 text-4xl" translate="no"
         [ngClass]="{'text-black bg-slate-100 rounded-full': isSelected}"
         >{{ icon }}</span>
      </button>
    </div>
  `,
  styles: ``
})
export class MaterialIconComponent {

  @Input()
  icon!: string;

  @Input()
  text!: string;

  @Input()
  isSelected = false;
}

