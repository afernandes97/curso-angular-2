import {Oferta} from './shared/oferta.model';

//chamando o httpmodule para requisicoes http
import {HttpClient, HttpResponse} from '@angular/common/http';


import {Injectable} from '@angular/core';

//retry
import { retry } from 'rxjs/operators'

import {URL_API} from '../app/app.api';
import { Observable } from 'rxjs';

//importando operador para utilizar o toPromise
//import 'rxjs/add/operator/toPromise';


//Decorator que marca uma classe como disponível para ser fornecida e injetada como uma dependência.
@Injectable()
export class OfertasService {

    //instanciando o httpclient no contrutor
    constructor(private http: HttpClient){
        
    }
   

    //array que ficaram as ofertas recebidas da api
    public getOfertas(): Promise<Oferta[]>{
        //efetuar uma requisicao http e retornar uma promise de um array de ofertas
        return this.http.get(`${URL_API}/ofertas?destaque=true`)
            //transformando observable em promise
            .toPromise()
            //recuperando a resposta com o observable convertido para promise
            .then((resposta:any) => resposta)
    }

    //recebendo os dados filtrando por categoria
    public getOfertasPorCategoria(categoria: string): Promise<Oferta[]>{
        return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
            //convertendo para promise
            .toPromise()
            .then((resposta: any) => resposta)
    }


    //criando filtro por id recebido atraves do snapshot contendo o id da pagina ativa no momento
    public getOfertaPorId(id: number): Promise<Oferta>{
        return this.http.get(`${URL_API}/ofertas?id=${id}`)
            .toPromise()
            //recebendo a resposta e pegando o valor contido dentor do array com indice 0 - no caso o proprio objeto
            .then((resposta: any) => {
                return resposta[0]                
            })
    }

    public getComoUsarOfertaPorId(id: number): Promise<string>{
        //pegando via metodo http get e utilizando a url dentro de url_api com a base
        //e buscando como-usar atravez de um id recebido via snapshop no component que ira utilizar
        return this.http.get(`${URL_API}/como-usar?id=${id}`)
            .toPromise()
            .then((resposta: any) => {
                //console.log(resposta)
                return resposta[0]
            })
    }

    public getOndeFicaPorId(id:number): Promise<string>{
        //pegando via metodo http get e utilizando a url dentro de url_api com a base
        //e buscando como-usar atravez de um id recebido via snapshop no component que ira utilizar
        return this.http.get(`${URL_API}/onde-fica?id=${id}`)
            .toPromise()
            .then((resposta:any) => {
                return resposta[0]
            })
    }

    //criando pesquisa ofertas
    //observable - Por definição é uma coleção que funciona de forma unidirecional, ou seja, ele emite notificações 
    //sempre que ocorre uma mudança em um de seus itens e a partir disto podemos executar uma ação.
    //imagine o observable como um objeto e o map vai atuar sobre o valor dele mesmo modificando para alguma 
    //coisa, de acordo com a necessidade
    public pesquisaOfertas(termo: string): Observable<Oferta[]>{
        //verificando via http a descricao_oferta - recebendo o termo enviado pelo user
        return this.http.get<Oferta[]>(`${URL_API}/ofertas?descricao_oferta_like=${termo}`)
            .pipe(retry(10))
    }
}









/*
    public getOfertas2(): Promise<Oferta[]> {
        //instanciando objeto promise
        return new Promise((resolve, reject) =>{
            
            console.log('point break')
            
            //simulando uma resposta do servidor verificando se a resposta foi positiva
            let deu_certo = true;

            //caso positivo apos um timeout de 3 segundos, os valores sao recebidos e encaminhados ao html
            if(deu_certo){
                //algum tipo de processamento que ao finalizar chama a funcao ou a funcao reject
                setTimeout(() => resolve(this.ofertas),3000);                
            }else{
                console.log('deu erro')
                reject({ codigo_erro:404, mensagem_erro: 'not found'})
            }
        })
        .then((ofertas: any) => {
            //esse then sera executado antes do then que foi chamado no metodo da home.component
            console.log("esse then vem antes do then da inicializacao do this.ofertasServices.getOfertas em home.component")
            return ofertas
        })

        .then((ofertas:any)=>{
            console.log("esse é o terceiro then antes de ir ao home.component")
            return ofertas
        })
    
    } */
