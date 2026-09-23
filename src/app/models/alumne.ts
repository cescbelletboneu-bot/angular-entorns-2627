export class Alumne {
    nom: string;
    edat: number;
    cicle: string;
    notes: number[];

    constructor(nom: string, edat: number, cicle: string, notes: number[]) {
        this.nom = nom;
        this.edat = edat;
        this.cicle = cicle;
        this.notes = notes;
    }

    presentar(): string {
        return `Soc ${this.nom}, tinc ${this.edat} anys i estudio ${this.cicle}`;
    }

    get mitjanaNotes(): number {
        let suma = 0;
        for (const nota of this.notes) {
            suma += nota;
        }
        return suma / this.notes.length;
    }

    get haAprobat(): boolean {
        return this.mitjanaNotes >= 5;
    }
}
