import { videojoc } from './Videojoc';

export class Biblioteca {
    // Propietats tipades
    nom: string;
    jocs: videojoc[];

    // Constructor amb paràmetres
    constructor(nom: string, jocs: videojoc[] = []) {
        this.nom = nom;
        this.jocs = jocs;
    }

    // Getter: retorna el nombre total de jocs
    get totalJocs(): number {
        return this.jocs.length;
    }

    // Mètode 1: afegir un videojoc a la biblioteca
    afegirJoc(joc: videojoc): void {
        this.jocs.push(joc);
    }

    // Mètode 2: buscar jocs per plataforma
    buscarPerPlataforma(plataforma: string): videojoc[] {
        return this.jocs.filter(joc => joc.platforma === plataforma);
    }
}
