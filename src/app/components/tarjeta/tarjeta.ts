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

  producte: Producte[] = [
    {
      nom: "PC macbook",
      preu: 100,
      descripcio: "Intel core i9, 16GB RAM, 512GB SSD",
    },

    {
      nom: "windows key",
      preu: 0,
      descripcio: "windows 11 key",
    },

    {
      nom: "PC GAMING",
      preu: 150,
      descripcio: "i5-14400F, RTX 4060, 16GB RAM",
    },

    {
      nom: "Teclat gaming",
      preu: 15,
      descripcio: "Mecànic,RGB, Cherry MX",
    }

  ]

}


/*
AGEFIR ETIQUETA OFERTA I GRATUÏT 
si el preu es inferior a 20 --> oferta
si el preu es 0 --> gratuït
si el preu es superior a 100 --> premium
*/

/*
if dins d'un for per marcar productes especials
si la categoria es informàtica --> div amb "destacat"

*/