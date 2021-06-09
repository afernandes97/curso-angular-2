import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'descricaoReduzida'
})
export class DescricaoReduzida {
    transform(texto: string, trucarEm: number){
        if(texto.length > 15){
            return texto.substr(0,trucarEm) + '...'
        }else{
            return texto;
        }
    }
}