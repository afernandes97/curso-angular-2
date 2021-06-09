import { Pedido } from "./shared/pedido.model"
import { Injectable } from '@angular/core'
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { URL_API } from "./app.api";
import { map } from "rxjs/operators";

@Injectable()
export class OrdemCompraService{

    constructor(private http: HttpClient){}

    public efetivarCompra(pedido: Pedido): Observable<any>{
        //header
        let headers: HttpHeaders = new HttpHeaders();

        //fazer a concistencia do dado na tabela e avisando os tipos que serao contidos
        headers.append('Content-type', 'application/json')
        //retornando os dados convertidos em string que sera anexado ao body da requisicao, fazendo um post na url
        return this.http.post(`${URL_API}/pedidos`,pedido,
        //header para avisar a api que vai receber a requisicao, como ela deve lidar
        ({headers:headers})
        
        ).pipe(map((resposta: any)=>{
          return resposta.id
      }))
    }
}