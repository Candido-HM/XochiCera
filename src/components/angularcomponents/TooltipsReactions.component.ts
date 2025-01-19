// import { NgIf } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
    selector:'app-reactions-ang',
    standalone: true,
    // imports: [NgIf],
    template: `
    
    <!-- <div data-dial-init class="flex end-6 bottom-6 group">
        <span>Aqui van a ir las reacciones</span>
        <span class="bg-red-200">{{ artisanId }}</span>

    </div> -->
    <div data-dial-init class="flex end-6 bottom-6 group">
        <div id="speed-dial-menu-horizontal-{{artisanId}}" class="flex items-center hidden me-4 space-x-2 rtl:space-x-reverse">
            <button type="button" [attr.data-tooltip-target]="'tooltip-share-' + artisanId" data-tooltip-placement="top" class="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 512 512">
                    <path fill="#FF473E" d="M476.6 133c-53.7-63.5-148.7-66.5-206.3-9.1l-.2.2c-8 8-20.5 8-28.4 0l-.2-.2c-54.6-54.8-143.3-55-198.1-.4C-3.2 169.8-10.9 244.6 25 299.7c11.2 17.3 25.3 30.6 40.9 40.7l180 145.7c6.4 5.2 15.6 5.2 22.1 0l178.8-145.9c15-10 28.6-23 39.5-39.5c34.1-51.3 30.1-120.7-9.7-167.7"/><path fill="#FF6E83" d="M58.7 242.6c-.6 0-1.3 0-1.9-.1c-12.9-1.1-22.5-12.4-21.5-25.3c3.8-45.9 36.5-83.5 81.5-93.5c12.6-2.8 25.2 5.1 28 17.8c2.8 12.6-5.1 25.2-17.8 28c-24.8 5.5-42.9 26.3-45 51.6c-1 12.2-11.2 21.5-23.3 21.5"/>
                </svg>
                <span class="sr-only">Me encanta</span>
            </button>
            <div id="tooltip-share-{{artisanId}}" role="tooltip" class="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                Me encanta
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            <button type="button" [attr.data-tooltip-target]="'tooltip-print-' + artisanId" data-tooltip-placement="top" class="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
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
            <button type="button" [attr.data-tooltip-target]="'tooltip-download-' + artisanId" data-tooltip-placement="top" class="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
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
        </div>
        <button type="button" [attr.data-dial-toggle]="'speed-dial-menu-horizontal-' + artisanId" aria-controls="speed-dial-menu-horizontal" aria-expanded="false" class="flex items-center justify-center text-white bg-blue-700 rounded-full w-14 h-14 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 transition-transform group-hover:-rotate-6" viewBox="0 0 24 24">
                <path fill="#D9D9D9" d="M4 21h1V8H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2M20 8h-7l1.122-3.368A2 2 0 0 0 12.225 2H12L7 7.438V21h11l3.912-8.596L22 12v-2a2 2 0 0 0-2-2"/>
            </svg>
            <span class="sr-only">Open actions menu</span>
        </button>
</div>
  `,
})
export class TooltipsReactionsComponent {
    @Input() artisanId!: string;
}