import { Component, OnInit } from '@angular/core';

//importacao do servico
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

  //instanciando o servico
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {

  //public oferta recebe um array utilizando o modelo criado no oferta.model
  public ofertas!: Oferta[]
  
  //instanciando diretamente no construtor o ofertasService utilizando como modelo
  //o ofertas.service.ts para receber o dados que estao sendo enviados pelo export
  constructor(private ofertasServices: OfertasService) { }

  ngOnInit(): void {
    //acessando o service ofertasservice
    //this.ofertas = this.ofertasServices.getOfertas();
    //console.log(this.ofertas);

    //aqui estamos utilizando o conceito de tranmissao de dados assincrona
    //onde o then é o resultado de uma respota positiva
    //e o catch faz a trativa do erro
    this.ofertasServices.getOfertas()
      .then((ofertas: Oferta[]) => { this.ofertas = ofertas 
      console.log('ofertas:',ofertas)
      })
      //tratativa de erro, funcao q sera tratada no reject da promisse
      .catch(
        (param: any) => console.log(param)
      )
  }

}
