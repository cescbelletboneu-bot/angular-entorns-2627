import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Videojoc, videojoc } from './models/Videojoc';
import { saludar, esMajorEdat, sumarArray } from './models/funcions';
import { Alumne } from './models/alumne';


@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.html',
    styleUrl: './app.css'
})

export class App {
    title = signal('angular-entorns-2627');

    llistajcos: Videojoc[] = [
        { nom: "GTA V", id: 1, platforma: "PS4", pes: 69.89, versio: "1.0", descarregat: false },
        { nom: "Minecraft", id: 2, platforma: "PC", pes: 1.54, versio: "1.0", descarregat: true },
        { nom: "FIFA 22", id: 3, platforma: "PS5", pes: 12.44, versio: "1.0", descarregat: false },
        { nom: "Call of Duty", id: 4, platforma: "Xbox", pes: 199.41, versio: "1.0", descarregat: false },
        { nom: "Cyberpunk 2077", id: 5, platforma: "PC", pes: 55.63, versio: "1.0", descarregat: true },
    ]

    constructor() {
        // Comprovació de funcions.ts
        console.log("--- Comprovant Funcions ---");
        console.log(saludar("Maria"));
        console.log("Edat 25 és major?:", esMajorEdat(25));
        console.log("Edat 15 és major?:", esMajorEdat(15));
        console.log("Suma [10, 20, 30]:", sumarArray([10, 20, 30]));

        // Comprovació d'Alumne
        console.log("--- Comprovant Alumnes ---");
        const alumne1 = new Alumne("Joan", 21, "DAW", [7, 8, 9, 6]);
        const alumne2 = new Alumne("Anna", 19, "DAM", [4, 5, 3, 2]);

        console.log(alumne1.presentar());
        console.log(`Ha aprovat el Joan? ${alumne1.haAprobat} (Mitjana: ${alumne1.mitjanaNotes})`);

        console.log(alumne2.presentar());
        console.log(`Ha aprovat l'Anna? ${alumne2.haAprobat} (Mitjana: ${alumne2.mitjanaNotes})`);

        // Comprovació de Videojocs (mètodes) amb l'array existent
        console.log("--- Comprovant Videojocs amb this.llistajcos ---");
        
        // Convertim els objectes de la interfície a instàncies de la classe 'videojoc'
        // perquè tinguin els mètodes disponibles
        const jocsInstanciats = this.llistajcos.map(
            j => new videojoc(j.nom, j.id, j.platforma, j.pes, j.versio, j.descarregat)
        );

        // Agafem el primer joc per cridar els seus mètodes
        const jocExemple = jocsInstanciats[0];

        console.log("Formatar Joc (GTA V):", jocExemple.formatarJoc());
        
        const jocId3 = jocExemple.findJocById(3, jocsInstanciats);
        console.log("Cercar joc ID 3:", jocId3 ? jocId3.nom : "No trobat");

        const jocsDescarregats = jocExemple.getDescarregats(jocsInstanciats);
        const nomsDescarregats = jocsDescarregats.map(j => j.nom).join(', ');
        console.log("Jocs descarregats:", nomsDescarregats);
    }
}
