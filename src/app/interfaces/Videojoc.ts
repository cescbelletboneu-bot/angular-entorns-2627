export interface Videojoc {
    nom: string;
    id: number;
    platforma: string;
    pes: number;
    versio: string;
    descarregat: boolean;
}

export class videojoc implements videojoc {
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
}