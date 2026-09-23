import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Videojoc } from './interfaces/Videojoc';


@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.html',
    styleUrl: './app.css'
})

export class App {

    llistajcos: Videojoc[] = [
        { nom: "GTA V", id: 1, platforma: "PS4", pes: 69.89, versio: "1.0", descarregat: false },
        { nom: "Minecraft", id: 2, platforma: "PC", pes: 1.54, versio: "1.0", descarregat: true },
        { nom: "FIFA 22", id: 3, platforma: "PS5", pes: 12.44, versio: "1.0", descarregat: false },
        { nom: "Call of Duty", id: 4, platforma: "Xbox", pes: 199.41, versio: "1.0", descarregat: false },
        { nom: "Cyberpunk 2077", id: 5, platforma: "PC", pes: 55.63, versio: "1.0", descarregat: true },
    ]
}
