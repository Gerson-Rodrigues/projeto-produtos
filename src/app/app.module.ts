import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { OrderModule } from 'ngx-order-pipe';

import { TokenInterceptor } from './_interceptor/tokenInterceptor';
import { AccountComponent } from './account/account.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarProdutosComponent } from './cadastrar-produtos/cadastrar-produtos.component';
import { ConsultarProdutosComponent } from './consultar-produtos/consultar-produtos.component';
import { EditarProdutosComponent } from './editar-produtos/editar-produtos.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'cadastrar-produtos', component: CadastrarProdutosComponent},
  {path: 'consultar-produtos', component: ConsultarProdutosComponent},
  {path: 'editar-produtos/:id', component: EditarProdutosComponent},
  {path: 'account', component: AccountComponent},
  {path: '', component: LoginComponent}//pagina inicial
]
@NgModule({
  declarations: [
    AppComponent,
    CadastrarProdutosComponent,
    ConsultarProdutosComponent,
    EditarProdutosComponent,
    LoginComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    OrderModule
  ],
  providers: [
    {
      //Configuração do uso do interceptor
      provide: HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
