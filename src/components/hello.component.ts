import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true, // Marca el componente como independiente
  imports: [NgIf],
  template: `
    <p>Hello from Angular!!</p>
    <p *ngIf="show">{{ helpText }}</p>
    <button (click)="toggle()">Toggle</button>
  `,
})
export class HelloComponent {
  @Input() helpText: string = 'Default help text'; // Propiedad de entrada

  show = false;

  toggle() {
    this.show = !this.show;
    console.log('Soy la funcion Toggle');
  }
}
