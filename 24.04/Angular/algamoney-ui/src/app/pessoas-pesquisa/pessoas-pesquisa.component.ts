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
    },
    { nome: 'Manoel Pinheiro', cidade: 'Uberlândia', estado: 'MG', status: true },
    { nome: 'Sebastião da Silva', cidade: 'São Paulo', estado: 'SP', status: false },
    { nome: 'Carla Souza', cidade: 'Florianópolis', estado: 'SC', status: true },
    { nome: 'Luís Pereira', cidade: 'Curitiba', estado: 'PR', status: true },
    { nome: 'Vilmar Andrade', cidade: 'Rio de Janeiro', estado: 'RJ', status: false },
    { nome: 'Paula Maria', cidade: 'Uberlândia', estado: 'MG', status: true }
  ];

  // checkstatus(status){
  //   if(this.pessoas.status == true){
  //
  //   }
  //
  // }
}
