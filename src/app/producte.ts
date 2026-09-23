//primera classe
export class producte {
    nom: string;
    preu: number;

    constructor(nom: string, preu: number) {
        this.nom = nom;
        this.preu = preu;
    }

    //metodes
    toString(): string {
        return `${this.nom} - ${this.preu}€`;
    }

    descropcio(): string {
        return `${this.nom} - ${this.preu}€`;
    }

    descompte(): number {
        return this.preu * 0.9;
    }

    //getters i setters
    getNom(): string {
        return this.nom;
    }
    getPreu(): number {
        return this.preu;
    }
    getPreuIVA(): number {
        return this.preu * 1.21;
    }
    setNom(nom: string): void {
        this.nom = nom;
    }
    setPreu(preu: number): void {
        this.preu = preu;
    }
}

