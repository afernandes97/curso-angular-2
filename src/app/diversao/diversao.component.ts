import { Component, OnInit } from '@angular/core';


//importando o modelo de dados que sera trabalhado - ofertas
import { Oferta } from '../shared/oferta.model';

//importando o servico de ofertas
import { OfertasService } from '../ofertas.service';


@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers: [OfertasService]
})
export class DiversaoComponent implements OnInit {

  //atribuindo a ofertas e recebendo o OfertasService
  constructor(public ofertasService: OfertasService) { }

  public ofertas!: Oferta[];

  ngOnInit(): void {
    this.ofertasService.getOfertasPorCategoria('diversao')
      .then((ofertas: Oferta[]) => {
        this.ofertas = ofertas
        console.log(ofertas)
    })
    .catch(
      (param: any) => console.log(param)
    )

  }
}
