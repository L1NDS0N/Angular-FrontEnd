import { Component, OnInit } from '@angular/core';
import { } from 'materialize-css';


@Component({
  selector: 'app-bic-menus',
  templateUrl: './bic-menus.component.html',
  styleUrls: ['./bic-menus.component.css']
})
export class BicMenusComponent implements OnInit {
  options = {};

  constructor() { }

  ngOnInit() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, this.options);

  }

}
