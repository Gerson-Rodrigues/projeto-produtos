import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-editar-produtos',
  templateUrl: './editar-produtos.component.html',
  styleUrls: ['./editar-produtos.component.css']
})
export class EditarProdutosComponent implements OnInit {
  mensagem: string = '';

  constructor(private httpClient: HttpClient,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const idProduto = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.httpClient.get(environment.apiUrl+'/produtos/'+idProduto).subscribe(
      (data:any) => {this.formEdicao.patchValue(data);},
      (e)=>{ console.log(e);});
  }

  //montando a estrutura do formulario
  formEdicao = new FormGroup({
    idProduto: new FormControl(''),
    nome: new FormControl('', [Validators.required]),
    preco: new FormControl('', [Validators.required]),
    qtd: new FormControl('', [Validators.required]),
    descricao: new FormControl('', [Validators.required]),
  });

  get form(): any {
    return this.formEdicao.controls;
  }

  onEdit(): void {
    this.httpClient.put(environment.apiUrl + '/produtos', this.formEdicao.value,{responseType:'text'}).subscribe(data => {
      this.mensagem = data;

    },
    e =>{
      this.mensagem = " Ocorreu um erro ao tentar editar o produto";
      console.log(e);
    }
    );
  }



}
