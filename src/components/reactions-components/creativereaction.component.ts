import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-reaction-creative',
    standalone: true,
    template: `

        <button type="button" (click)="creative()" [attr.data-tooltip-target]="'tooltip-download-' + artisanId" data-tooltip-placement="top" class="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 64 64">
                    <path fill="#ffce31" d="M62 23H39.1L32 2l-7.1 21H2l18.5 13l-7.1 21L32 44l18.5 13l-7.1-21z"/>
                    <path fill="#ffdf85" d="m46.2 20.3l4-11.4l-10.5 7.2l1.5 4.2zM27.9 50L32 62l4.1-12l-4.1-2.8zm22.8-15.7l-3.8 2.6l1.6 4.8h12.9zM24.3 16.1L13.8 8.9l4 11.4h5zm-11 18.2L2.6 41.7h12.9l1.6-4.8z"/>
                </svg>
                <span class="sr-only">Creativo</span>
            </button>
            <div id="tooltip-download-{{artisanId}}" role="tooltip" class="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                Creativo
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>

    `})

export class ReactionCreativeComponent {
    @Input() artisanId!: string;

    creative() {
        alert('Creativo '+this.artisanId);
        // console.log('Me encanta', this.artisanId);
        // this.show = !this.show;
        // this.cdr.detectChanges();
    }
}