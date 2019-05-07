import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filme-form',
  templateUrl: './filme-form.component.html',
  styleUrls: ['./filme-form.component.css']
})
export class FilmeFormComponent  {

  titulo: string;
  genero: string;

  constructor() { }

  @Output('filmeAdicionado') filmeAdicionado = new EventEmitter();
  adicionarFilme(){
    const filme = {
      titulo: this.titulo,
      genero: this.genero

    };
    this.filmeAdicionado.emit(filme);

  }
}
