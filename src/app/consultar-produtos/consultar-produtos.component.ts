import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

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
    this.httpClient.get(environment.apiUrl+'/produtos').subscribe(
      (data)=> {this.produtos = data as any[];
      },
      (e) => {console.log(e)}
    )
  }//fecha o método onInit

  //função pra fazer a exclusão do produto na API

  excluir(idproduto:number):void {
    if(window.confirm('Deseja realmente excluir o produto selecionado???')){
      this.httpClient.delete(environment.apiUrl+'/produtos/'+idproduto,
      {responseType: 'text'}).subscribe((data)=> {
        alert (data);      //exibir mensagem em uma janela popup
        this.ngOnInit();   //recarregar a consulta de produtos
      },
      (e)=>{ console.log(e)})
    }
  }
  key: string = 'nome'; // Define um valor padrão, para quando inicializar o componente
    reverse: boolean = false;
    sort(key: string) {
        this.key = key;
        this.reverse = !this.reverse;
    }

}
