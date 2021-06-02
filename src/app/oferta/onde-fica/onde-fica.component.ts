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
     //recebendo snapshot da rota parant(pai)
     this.ofertasService.getOndeFicaPorId(this.route.parent?.snapshot.params['id'])
      .then((resposta: any) => {
        this.ondeFica = resposta.descricao;
        console.log(this.ondeFica)
      })
  }

}
