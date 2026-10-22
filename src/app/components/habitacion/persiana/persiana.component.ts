import { Component, input } from '@angular/core';

@Component({
  selector: 'app-persiana',
  imports: [],
  templateUrl: './persiana.component.html',
  styleUrl: './persiana.component.css',
  host: {
    '[class.warning]': 'alarm',
  },
})
export class PersianaComponent {
  estado = false;
  corriente = input<boolean>();
  alarm = false;

  onConetarDesconectarPer(event: Event) {
    if (!this.corriente) {
      this.alarm = true;
    }else{
      this.alarm = false;
      let conDes = event.target as HTMLButtonElement;
      this.estado = !this.estado;
      conDes.innerHTML = this.estado ? 'Bajar' : 'Subir';
    }
  }
}
