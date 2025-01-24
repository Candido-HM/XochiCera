import { Component } from "@angular/core";

@Component({
    selector:'app-reaction-section',
    standalone: true,
    template: `
        <div class=" bg-white flex items-center py-3 px-5">
                <div class="flex">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                            <path fill="#666666" d="M12 4.528a6 6 0 0 0-8.243 8.715l6.829 6.828a2 2 0 0 0 2.828 0l6.829-6.828A6 6 0 0 0 12 4.528m-1.172 1.644l.465.464a1 1 0 0 0 1.414 0l.465-.464a4 4 0 1 1 5.656 5.656L12 18.657l-6.828-6.829a4 4 0 0 1 5.656-5.656"/>
                        </svg>
                    </button>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 128 128">
                            <path fill="#db4437" d="M90.35 16.05c-11.66 0-21.81 6.97-26.35 17.06c-4.54-10.08-14.69-17.06-26.35-17.06c-15.92 0-28.87 12.96-28.87 28.88c0 35.9 51.79 65.46 54 66.7c.38.21.79.32 1.21.32s.84-.11 1.21-.32c2.2-1.24 54.01-30.8 54.01-66.7c.01-15.92-12.94-28.88-28.86-28.88"/>
                        </svg>
                    </button> 
                </div>
                <span class="bg-blue-200 text-blue-700 text-xs font-semibold px-2.5 py-0.5 rounded-md ms-3">0</span>
            </div>
    `
})

export class ReactionSectionComponent {

}