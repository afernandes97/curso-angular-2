import {Oferta} from './shared/oferta.model';

//chamando o httpmodule para requisicoes http
import {HttpClient} from '@angular/common/http';


import {Injectable} from '@angular/core';


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
        return this.http.get('http://localhost:3000/ofertas?destaque=true')
            //transformando observable em promise
            .toPromise()
            //recuperando a resposta com o observable convertido para promise
            .then((resposta:any) => resposta)
    }

    //
    public getOfertasPorCategoria(categoria: string): Promise<Oferta[]>{
        return this.http.get(`http://localhost:3000/ofertas?categoria=${categoria}`)
            .toPromise()
            .then((resposta: any) => resposta)
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
