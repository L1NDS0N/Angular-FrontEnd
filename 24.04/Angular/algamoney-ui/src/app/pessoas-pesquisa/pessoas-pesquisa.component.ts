import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent {

  pessoas = [
    {
      estado: 'DESPESA',
      cidade: 'Compra de pão',
      status: true,
      nome: 'Padaria do José'
    },
    {
      estado: 'RECEITA',
      cidade: 'Venda de software',
      status: false,
      nome: 'Atacado Brasil'
    },
    {
      estado: 'DESPESA',
      cidade: 'Impostos',
      status: true,
      nome: 'Ministério da Fazenda'
    },
    {
      estado: 'DESPESA',
      cidade: 'Mensalidade da escola',
      status: false,
      nome: 'Escola Abelha Rainha'
    },
    {
      estado: 'RECEITA',
      cidade: 'Venda de carro',
      status: true,
      nome: 'Sebastião deSousa'
    },
    {
      estado: 'DESPESA',
      cidade: 'Aluguel',
      status: true,
      nome: 'Casa Nova Imóveis'
    },
    {
      estado: 'DESPESA',
      cidade: 'Mensalidade musculação',
      status: false,
      nome: 'Academia Top'
    }
  ];
  
  // checkstatus(){
  //   if(this.pessoas.values.status == true){
  //     let checkedstatus: string = "Ativo";
  //   }
  //    checkedstatus: string = "Inativo";
  // }
}
