import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from 'src/app/ofertas.service';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  //instanciando o provider
  providers: [OfertasService]
})
export class OndeFicaComponent implements OnInit {

  public ondeFica!: [];

  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) { }

  ngOnInit(): void {


      this.route.parent?.params.subscribe((parametros: any)=>{
        //recebendo snapshot da rota parant(pai) e devolvendo a resposta
        this.ofertasService.getOndeFicaPorId(parametros.id)
          .then((resposta: any) => {
            //retornando a resposta para o objeto e poder fazer um databinding no front end
            this.ondeFica = resposta.descricao;
          })
        })
  }

}
