import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HabitacionComponent } from './components/habitacion/habitacion.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HabitacionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'CONTROL DE VIVIENDA';
  corrienteVivienda = false;
  corrienteHabitacion = false;

  onConetarDesconectar(event: Event) {
    let conDes = event.target as HTMLButtonElement;

    this.corrienteVivienda = !this.corrienteVivienda;
    conDes.innerHTML =
      (this.corrienteVivienda ? 'Desconectar' : 'Conectar') +
      ' corriente vivienda';

    if (!this.corrienteVivienda) this.corrienteHabitacion = false;
  }

  onConetarDesconectarHab(event: Event) {
    let conDes = event.target as HTMLButtonElement;
    this.corrienteHabitacion = !this.corrienteHabitacion;
    conDes.innerHTML =
      (this.corrienteHabitacion ? 'Desconectar' : 'Conectar') +
      ' corriente Hab #1';
    if (!this.corrienteVivienda) this.corrienteHabitacion = false;
  }
}
