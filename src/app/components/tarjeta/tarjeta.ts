import { Component, Input } from '@angular/core';
import { Producte } from '../../producte';

@Component({
  selector: 'app-tarjeta',
  imports: [],
  templateUrl: './tarjeta.html',
  styleUrl: './tarjeta.css',
})
export class Tarjeta {
  @Input() imatge: string = '';

  producte: Producte = {
    nom: "PC GAMING",
    preu: 1000,
    descripcio: "i5-14400F, RTX 4060, 16GB RAM",
  }
}
