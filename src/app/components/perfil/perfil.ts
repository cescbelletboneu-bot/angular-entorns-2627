import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  imports: [],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css',
})
export class Perfil {
  /*
  INTERPOLACIÓ DE DADES
  Permet connectar les dades del ts a l'html
  Permet incrudtar expressions ts dins de l'html, angular avalua l'expressió i mostra el resultat com a text.
{{nompropietat}} --> mostra el valor d'una propietat de la classe
{{2 + 3}} --> mostra el resultat d'una expressió
{{nom.toUpperCase()}} --> mostra el resultat d'una funció
{{edat >= 18 ? 'Major d\'edat' : 'Menor d\'edat'}} --> mostra el resultat d'un condicional
 */
}
