import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-reaction-support',
    standalone: true,
    template: `
        
        <button type="button" (click)="support()" [attr.data-tooltip-target]="'tooltip-print-' + artisanId" data-tooltip-placement="top" class="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 32 32">
                    <g fill="none">
                        <path fill="#FFDEA7" d="M19.629 30h-7.913c-.78 0-1.412-.631-1.412-1.412V15.47c0-.78.632-1.412 1.412-1.412h7.913c.78 0 1.412.632 1.412 1.412v13.118c0 .78-.632 1.412-1.412 1.412"/>
                        <path fill="#9B9B9B" d="M16.479 9.732h-1.613v2.372h1.613z"/>
                        <path fill="#FFCE7C" d="M20.54 11.45h-9.735c-.997 0-1.805.808-1.805 1.804v4.643c0 .79.634 1.433 1.42 1.448c.812.015 1.476-.674 1.476-1.486v-2.345c0-.252.204-.455.456-.455h2.94c.192 0 .348.155.348.348v.764c0 .812.665 1.501 1.476 1.486a1.447 1.447 0 0 0 1.42-1.448v-.695a.456.456 0 1 1 .912 0v4.638c0 .812.664 1.502 1.476 1.486a1.447 1.447 0 0 0 1.42-1.448v-6.935c0-.997-.807-1.806-1.803-1.806"/>
                        <path fill="#FFB02E" d="m18.258 5.571l-1.85-3.15a.854.854 0 0 0-1.472 0l-1.855 3.16q-.036.058-.07.12L13 5.716a3.04 3.04 0 0 0-.373 1.585a3.066 3.066 0 0 0 3.004 2.927a3.047 3.047 0 0 0 2.627-4.658"/>
                        <path fill="#FCD53F" d="M15.673 9.036a1.663 1.663 0 1 0 0-3.326a1.663 1.663 0 0 0 0 3.326"/>
                    </g>
                </svg>
                <span class="sr-only">Apoyar</span>
            </button>
            <div id="tooltip-print-{{artisanId}}" role="tooltip" class="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                Apoyar
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
        
`})
export class ReactionSupportComponent {
    @Input() artisanId! : string;

    support() {
        alert('Apoyo '+this.artisanId);
        // console.log('Me encanta', this.artisanId);
        // this.show = !this.show;
        // this.cdr.detectChanges();
    }
}
