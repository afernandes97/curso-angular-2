import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service';
import { Pedido } from '../shared/pedido.model';

//importando servico ordem compra


@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {

  //atributos da classe
  public endereco: string = "";
  public numero!: string;
  public complemento: string = "";
  public formaPagamento: string ="";


  //ATRIBUTOS PARA VALIDACAO
  public enderecoValido!: boolean;
  public numeroValido!: boolean;
  public complementoValido!: boolean;
  public pagamentoValido!: boolean;


  //ATRIBUTOS PARA ESTADOS PRIMITIVOS DOS CAMPOS (prestine)
  public enderecoEstadoPrimitivo: boolean = true;
  public numeroEstadoPrimitivo: boolean = true;
  public complementoEstadoPrimitivo: boolean = true;
  public pagamentoValidoEstadoPrimitivo: boolean = true;

  //CONTROLAR BOTAO CONFIRMAR COMPRA
  public formEstado: string = 'disabled';

  //PEDIDO
  public pedido: Pedido = new Pedido('','','','')
  
  //ID PEDIDO DA COMPRA
  public idPedidoCompra!: number;
  
  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit(): void {
   
  }

  public atualizaEndereco(endereco: string): void{
    this.endereco = endereco;

    //
    this.enderecoEstadoPrimitivo = false;
    //sera valido quando a string for maior que 5
    if(this.endereco.length > 5){
      this.enderecoValido = true;
    }else{
      this.enderecoValido = false;
    }
    this.habilitaForm();

  }

  public atualizaNumero(numero: any): void{
    this.numero = numero;

    //
    this.numeroEstadoPrimitivo = false;
    if(this.numero.length > 2){
      this.numeroValido = true;
    }else{
      this.numeroValido = false;
    }

    this.habilitaForm();
  }

  public atualizaComplemento(complemento: string): void{
    this.complemento = complemento;

    //
    this.complementoEstadoPrimitivo = false;

    if(this.complemento.length > 1){
      this.complementoValido = true;
    }else{
      this.complementoValido = false;
    }

  }

  public atualizaFormaPagamento(formaPagamento: string): void{
    this.formaPagamento = formaPagamento;

    //
    this.pagamentoValidoEstadoPrimitivo = false;
    
    if(this.formaPagamento.length > 0){
      if(this.formaPagamento == "dinheiro"){
        this.pagamentoValido = true;
      }else if(this.formaPagamento == 'debito') {
        this.pagamentoValido = true;
      }else{
        this.pagamentoValido = false;
      }
    }
    this.habilitaForm();

  }


  public habilitaForm(): void{
    this.enderecoValido === true
    this.numeroValido === true
    this.pagamentoValido === true

    if(this.enderecoValido === true && this.numeroValido === true && this.pagamentoValido === true){
        this.formEstado = ''
    }else{
      this.formEstado = 'disabled'
    }
    
  }

  public confirmarCompra(){
    this.pedido.endereco = this.endereco
    this.pedido.numero = this.numero
    this.pedido.complemento = this.complemento
    this.pedido.formaPagamento = this.formaPagamento
    this.ordemCompraService.efetivarCompra(this.pedido)
      //assistindo o observable retornado pelo metodo
      .subscribe((idPedido: any)=> {
        this.idPedidoCompra = idPedido;
      })
  }
}
