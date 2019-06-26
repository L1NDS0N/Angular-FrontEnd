import { CidadeService } from './cidade.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// class cepobtido {
//   cep: string;
//   logradouro: string;
//   complemento: string;
//   bairro: string;
//   localidade: string;
//   uf: string;
//   unidade: string;
//   ibge: string;
//   gia: string;
// }
export class AppComponent implements OnInit {

  cidades = [];
  cepobtido = [];


  constructor(private cidadeService: CidadeService) {}

  ngOnInit() {
    this.consultar()

  }

  consultar(){
    this.cidadeService.consultar()
    .then(dados => {
      this.cidades = dados;
    })
  }

  consultarcep(cep: any){
    this.cidadeService.consultarcep(cep)
    .then(cepinfo => {
      this.cepobtido = cepinfo;
      console.log(this.cepobtido)
    });
  }

  adicionar(nome: string, cep: string) {
    this.cidadeService.adicionar({ nome, cep })
    .then(cidade => {
      this.consultar();
    });
  }

  excluir(id: number) {
    this.cidadeService.excluir(id)
    .then(() => this.consultar()
  );
}

atualizar(cidade: any) {
    this.cidadeService.atualizar(cidade)
      .then(() => { });
  }

}
