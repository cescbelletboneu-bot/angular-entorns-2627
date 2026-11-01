import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tarjeta } from './components/tarjeta/tarjeta';
import { Perfil } from './components/perfil/perfil';
import { FitxaProducteComponent } from './components/fitxa-producte/fitxa-producte';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Tarjeta, Perfil, FitxaProducteComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-entorns-2627');

  Fruites: string[] = ['Poma', 'Plàtan', 'Taronja', 'Maduixa', 'Raïm'];
}
