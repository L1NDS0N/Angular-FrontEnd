import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Locadora Senai'

  filmes = [];

  adicionar(filme){
    this.filmes.push(filme);
  }
}
