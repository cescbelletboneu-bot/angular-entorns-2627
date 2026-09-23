import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import type { Producte } from './interfaces/producte';
import { producte } from './producte';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.html',
    styleUrl: './app.css'
})

export class App {
    protected readonly title = signal('angular');
    //productes
    productes: Producte[] = [
        {
            id: 1,
            nom: "Poma",
            preu: 0.5,
            disponible: true,
            descripcio: "Poma vermella de temporada"
        },
        {
            id: 2,
            nom: "Plàtan",
            preu: 0.3,
            disponible: true
        },
        {
            id: 3,
            nom: "Pinya",
            preu: 2.5,
            disponible: false,
            descripcio: "Pinya tropical, actualment sense estoc"
        }
    ];

    p1 = new producte("Poma", 0.5);

    constructor() {
        console.log(this.p1.descropcio());
        console.log("dpreu despres de 10% de descompte: " + this.p1.descompte());

    }

    ngOnInit() {
        alert("Preu: " + this.p1.descropcio() + "\nDescompte: " + this.p1.descompte());
    }

    //1. AFEGIU UN MÈTODE A LA CLASSE PRODUCTE descripcio() que retorni un string amb nom i preu
    //2. MÈTODE descompte() que retorni el preu amb un 10% de rebaixa
    //3. creeu un nou producte i mostreu el descompte per consola
    //4. cerqueu la manera de mostrar el descompte amb un popup  
}
