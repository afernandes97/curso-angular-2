import { Component, OnInit } from '@angular/core';

//interface
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent implements OnInit {

  //
  private route!: ActivatedRoute;

  //instanciando no construtor o route para fazermos um snapshot da rota ativa no momento
  constructor(route: ActivatedRoute) {
      this.route = route
   }

  ngOnInit(): void {
    //recebendo o snapshot utilizando os parametros para indicar o que buscar
    this.route.snapshot.params['id'];
  }

}
