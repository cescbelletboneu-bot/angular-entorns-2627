export interface Videojoc {
    nom: string;
    id: number;
    platforma: string;
    pes: number;
    versio: string;
    descarregat: boolean;
}

export class videojoc implements Videojoc {
    nom: string;
    id: number;
    platforma: string;
    pes: number;
    versio: string;
    descarregat: boolean;

    constructor(nom: string, id: number, platforma: string, pes: number, versio: string, descarregat?: boolean) {
        this.nom = nom;
        this.id = id;
        this.platforma = platforma;
        this.pes = pes;
        this.versio = versio;
        this.descarregat = descarregat || false;
    }

    //metodes
    //recore l'array i retorna tots els jocs descarregats
    getDescarregats(videojocs: videojoc[]) {
        for (const joc of videojocs) {
            if (joc.descarregat) {
                return this.nom;
            }
        }
        return null;
    }

    findJocById(id: number, videojocs: videojoc[]) {
        for (const joc of videojocs) {
            if (joc.id === id) {
                return joc;
            }
        }
        return null;
    }

    formatarJoc() {
        return `${this.nom} - ${this.id} - ${this.platforma} - ${this.pes} - ${this.versio} - ${this.descarregat}`;
    }
}