import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//importanto ofertas service
import { OfertasService } from '../../ofertas.service';


@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  //instanciando o providers
  providers: [OfertasService]
})
export class ComoUsarComponent implements OnInit {

  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) { }

  
  ngOnInit(): void {
    //recebendo snapshot da rota parant(pai)
    this.ofertasService.getComoUsarOfertaPorId(this.route.parent?.snapshot.params['id'])
      .then((resposta: any) => {
        console.log(resposta)
      })
  }

}
