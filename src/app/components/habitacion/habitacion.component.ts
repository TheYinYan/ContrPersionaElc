import { Component, input } from '@angular/core';
import { PersianaComponent } from './persiana/persiana.component';

@Component({
  selector: 'app-habitacion',
  imports: [PersianaComponent],
  templateUrl: './habitacion.component.html',
  styleUrl: './habitacion.component.css',
})
export class HabitacionComponent {
  corriente = input();
  // onConetarDesconectarHab(event: Event) {
  //   let conDes = event.target as HTMLButtonElement;
  //   this.corriente = !this.corriente;
  //   conDes.innerHTML =
  //     (this.corriente ? 'Desconectar' : 'Conectar') + ' corriente Hab #1';
  //   if (!this.corriente) this.corriente = false;
  // }
}
