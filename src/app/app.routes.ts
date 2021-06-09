//importando angular routes
import { Routes } from '@angular/router';

//importar componentes que serao associados as rotas
import { HomeComponent } from './home/home.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { DiversaoComponent } from './diversao/diversao.component';
import { OfertaComponent } from './oferta/oferta.component';

//rotas filhas
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component';
import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component';
import { OrdemCompraComponent } from './ordem-compra/ordem-compra.component';

export const ROUTES: Routes = [
    {path:'', component: HomeComponent},
    {path:'restaurantes',component: RestaurantesComponent},
    {path:'diversao',component: DiversaoComponent},
    {path:'oferta',component: HomeComponent},
    //indicando ao path como receber o parametro para gerar o conteudo da pag
    //atraves da passagem de um parametro e chamando os filhos
    {path:'oferta/:id',component: OfertaComponent, children:[
        {path: '',component: ComoUsarComponent},
        {path: 'como-usar', component: ComoUsarComponent},
        {path:'onde-fica', component: OndeFicaComponent}
    ]},
    {
        path: 'ordem-compra', component: OrdemCompraComponent
    }

]