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

  public comoUsar!: []

  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) { }

  
  ngOnInit(): void {

    this.route.parent?.params.subscribe((parametros: any)=>{
    //recebendo snapshot da rota parant(pai) e devolvendo a resposta
    this.ofertasService.getComoUsarOfertaPorId(parametros.id)
      .then((resposta: any) => {
        //retornando a resposta para o objeto e poder fazer um databinding no front end
        this.comoUsar = resposta.descricao;
      })
    })

  }

}
