import { Component, input } from '@angular/core';

@Component({
  selector: 'app-persiana',
  imports: [],
  templateUrl: './persiana.component.html',
  styleUrl: './persiana.component.css',
})
export class PersianaComponent {
  estado = false;
  corriente = input();

  onConetarDesconectarPer(event: Event) {
    let conDes = event.target as HTMLButtonElement;
    this.estado = !this.estado;
    conDes.innerHTML = this.estado ? 'Bajar' : 'Subir';
    
    if (!this.corriente) {
      this.estado = false;
      conDes.innerHTML = 'Subir';
    }
  }
}
