import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import {OfertasService} from '../ofertas.service';

//model oferta
import { Oferta } from '../shared/oferta.model';
@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  //sera responsavel por guardar o termodabusca recebido do input
  public ofertas!: Observable<Oferta[]>

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
  }


  //recuperando evento de keyup no input> recebendo esse evento
  public pesquisa(termoDaBusca: string): void{
    this.ofertas = this.ofertasService.pesquisaOfertas(termoDaBusca)
    this.ofertas.subscribe(
      (ofertas: Oferta[]) => 
      console.log(ofertas),
      (erro: any) => console.log('erro status',erro[0])
    )
  }

 
}
