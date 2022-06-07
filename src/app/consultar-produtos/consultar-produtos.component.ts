import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultar-produtos',
  templateUrl: './consultar-produtos.component.html',
  styleUrls: ['./consultar-produtos.component.css']
})
export class ConsultarProdutosComponent implements OnInit {
  //atribuutos para armaznar os dadosdo produtos
  produtos: any[] =[];

  //injeção de dependência
  constructor(private httpClient: HttpClient) { }

  //Método executa quando o componente é aberto
  ngOnInit(): void {
    this.httpClient.get('http://localhost:8090/api/produtos').subscribe(
      (data)=> {
        this.produtos = data as any[];
      },
      (e) => {
        console.log(e);
      }
      )
  }//fecha o método onInit

}
