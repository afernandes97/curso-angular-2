import { Component, OnInit } from '@angular/core';

//interface
import { ActivatedRoute } from '@angular/router';

//importando serviceOferta
import { OfertasService } from '../ofertas.service';
//modelo de oferta
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  //instanciando o provider do servico
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit {


  //variavel que recebera a resolucao da promisse
  public oferta!: Oferta
  //
  private route!: ActivatedRoute;

  //instanciando no construtor o route para fazermos um snapshot da rota ativa no momento
  //instanciando no construtor o ofertasService
  constructor(route: ActivatedRoute, private ofertasService: OfertasService) {
      this.route = route
   }

  ngOnInit(): void {
    //recebendo o snapshot utilizando os parametros para indicar o que buscar
    this.route.snapshot.params['id'];

    //subscrie - capas de emitir um callback e fica identificando alteracoes
    //definindo uma acao para dizer o que fazer
    /* subscribe> this.route.params.subscribe((parametro: any)=>{
      console.log(parametro)
    })*/

    //recuperando a oferta com base no id que estamos recuperando da rota atraves do recurso de snapshot
    this.ofertasService.getOfertaPorId(this.route.snapshot.params['id'])
      //tratando a resposta e recendo dentro de uma variavel com o modelo e colocando dentro da variavel que recebera a promisse
      .then((oferta: Oferta)=>{
        this.oferta = oferta
      })
  }

}
