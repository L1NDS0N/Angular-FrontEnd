import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-filme-card',
  templateUrl: './filme-card.component.html',
  //styleUrls: ['./filme-card.component.css']
  styles: [`
    .card-block {
      text-transform: uppercase;
      color: blue;
    }
  `]
})
export class FilmeCardComponent {
  
  let filmesDisponiveis: string[] = [this.titulo];

  @Input() filme: any;

  //getClassesCss() {
  //  return ['badge', 'badge-default'];
  //}

  isAdmin() {
    return this.filme.titulo.startsWith('Admin');
  }

  getEstilosCartao() {
    return {
      'border-width.px': this.filme.id,
      backgroundColor: this.filme.id % 2 === 0
        ? 'lightblue' : 'lightgreen',
        // 'display': 'inline-block',
        // 'width': 100,
        // 'heigth': 100,
        'overflow-x': 'scroll',
        'overflow-y': 'hidden',
        'white-space': 'nowrap',
        'text-overflow': 'ellipsis'
    };
  }


}
