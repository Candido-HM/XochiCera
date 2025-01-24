import { Component, Input} from "@angular/core";

@Component({
    selector:'app-reaction-love',
    standalone:true,
    template: `

        <button #tooltipButton type="button" (click)="love()" [attr.data-tooltip-target]="'tooltip-share-' + artisanId" data-tooltip-placement="top" class="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 512 512">
                <path fill="#FF473E" d="M476.6 133c-53.7-63.5-148.7-66.5-206.3-9.1l-.2.2c-8 8-20.5 8-28.4 0l-.2-.2c-54.6-54.8-143.3-55-198.1-.4C-3.2 169.8-10.9 244.6 25 299.7c11.2 17.3 25.3 30.6 40.9 40.7l180 145.7c6.4 5.2 15.6 5.2 22.1 0l178.8-145.9c15-10 28.6-23 39.5-39.5c34.1-51.3 30.1-120.7-9.7-167.7"/><path fill="#FF6E83" d="M58.7 242.6c-.6 0-1.3 0-1.9-.1c-12.9-1.1-22.5-12.4-21.5-25.3c3.8-45.9 36.5-83.5 81.5-93.5c12.6-2.8 25.2 5.1 28 17.8c2.8 12.6-5.1 25.2-17.8 28c-24.8 5.5-42.9 26.3-45 51.6c-1 12.2-11.2 21.5-23.3 21.5"/>
            </svg>
            <span class="sr-only">Me encanta</span>
        </button>
        <div #tooltip id="tooltip-share-{{artisanId}}" role="tooltip" class="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Me encanta
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>  
`})
export class ReactionLoveComponent {
    @Input() artisanId!: string;

    love() {
        alert('Me encanta '+this.artisanId);
        // console.log('Me encanta', this.artisanId);
        // this.show = !this.show;
        // this.cdr.detectChanges();
    }
}
