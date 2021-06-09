import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

import {OfertasService} from '../ofertas.service';


//switchmap
import {catchError, debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';



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

  //subjectPesquisa dispara oservables na string de eventos
  private subjectPesquisa: Subject<string> = new Subject<string>()

  //atributo que guardara o array de ofertas
 


  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
    this.ofertas = this.subjectPesquisa
      //entrega a requisicao apos 2segundos, tempo para usuario digitar a pesquisa
      .pipe(debounceTime(200))
      //verificando se o conteudo digitado nao foi usado anteriormente, caso tenha sido nao faz uma nova requisao
      .pipe(distinctUntilChanged())//faz pesquisas distintas
      .pipe(switchMap((termo: string) => {
        console.log('requisicao http para a api')
        //caso o conteudo seja vazio, ele trara o array de ofertas vazio
        if(termo.trim() === ''){
          //retornar observable de array de ofertas vazio
          return of<Oferta[]>([])
        }
        return this.ofertasService.pesquisaOfertas(termo)
      }))
      //resiliencia, caso o metodo falhe por algum motivo, podemos recuperar o erro e apartir dele tomar um acao
      //e devolver pra quem fez o subscribe no observable, o objeto esperado para q o proximo passo seja dado na aplicacao
      .pipe(catchError((err: any) => {
        console.log(err)
        return of<Oferta[]>([])
      
      }))
      
  }

  


  //recuperando evento de keyup no input> recebendo esse evento
  public pesquisa(termoDaBusca: string): void{
    
    //console.log('keyup caracter', termoDaBusca)
    //
    this.subjectPesquisa.next(termoDaBusca)



    
    /* versao anterior
    -----------------------------------
     //recebendo o conteudo do termobusca usando o metodo pesquisaofertas(ofertas.service.ts)
    this.ofertas = this.ofertasService.pesquisaOfertas(termoDaBusca)
    //fazendo um subscribe com o conteudo - so emitir um valor nao resolve o problema, devemos pegar o 
    //valor e dizer como deve ser tratado, com eventos disparados de forma assincronas
    this.ofertas.subscribe(
      //tratando os dados da busca a patir de tratamentos do subscribe
      //caso positivo ele traz pra dentro do ofertas o dados recebido e tratado
      (ofertas: Oferta[]) => 
      console.log(ofertas),
      //alem de poder tratar o erro
      (erro: any) => console.log('erro status',erro.status),
      //e o tratamento do sucesso, assim que todo fluxo for percorrido
      () => console.log(this.ofertas)
    )
    --------------------------------
    */
  }


  limpaPesquisa(): void{
    this.subjectPesquisa.next('')
  }
 
}
