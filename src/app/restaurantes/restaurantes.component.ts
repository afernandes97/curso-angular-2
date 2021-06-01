import { Component, OnInit } from '@angular/core';

//importando o modelo de dados que sera trabalhado - ofertas
import { Oferta } from '../shared/oferta.model';

//importando o servico de ofertas
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  //pegando os metadados atraves do providers
  providers: [OfertasService]
})
export class RestaurantesComponent implements OnInit {

  //atribuindo a ofertas e recebendo o OfertasService
  constructor(public ofertasService: OfertasService) { }
  public ofertas!: Oferta[];

  ngOnInit(): void {
    this.ofertasService.getOfertasPorCategoria('restaurante')
      .then((ofertas: Oferta[]) => {
        this.ofertas = ofertas
        console.log(ofertas)
    })
    .catch(
      (param: any) => console.log(param)
    )

  }
}
