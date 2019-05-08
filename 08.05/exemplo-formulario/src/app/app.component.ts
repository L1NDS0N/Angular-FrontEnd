import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';


class Cliente {
  nome: string;
  email: string;
  profissao: string;

}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  cliente = new Cliente();
  title = 'app';

  profissoes = ['Programador', 'Empresário', 'Outra'];

  salvar(form: NgForm){

      form.reset({})
  }
}
