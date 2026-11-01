import { Component } from '@angular/core';

@Component({
  selector: 'app-fitxa-producte',
  imports: [],
  templateUrl: './fitxa-producte.html',
  styleUrl: './fitxa-producte.css',
})
export class FitxaProducteComponent {
  nom: string = 'Teclat gaming';
  preu: number = 15;
  teEstoc: boolean = true;

  // Variable d'estat: controla alhora el [disabled] del botó i el [class.confirmat] de la fitxa
  afegitAlCarret: boolean = false;

  afegir(): void {
    this.afegitAlCarret = true;
  }
}
