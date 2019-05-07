import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filme-card',
  templateUrl: './filme-card.component.html',
  styleUrls: ['./filme-card.component.css']
})
export class FilmeCardComponent {

  @Input() filme: any;
}
