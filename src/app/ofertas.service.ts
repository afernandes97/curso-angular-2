import {Oferta} from './shared/oferta.model';

export class OfertasService {

    //ofertas
    public ofertas: Array<Oferta> = [
        
            {
                id: 1,
                categoria: "restaurante",
                titulo: "Super Burger",
                descricao_oferta: "Rodízio de Mini-hambúrger com opção de entrada.",
                anunciante: "Original Burger",
                valor: 29.90,
                destaque: true,
                imagens: [
                    {url: "/assets/ofertas/1/img1.jpg"},
                    {url: "/assets/ofertas/1/img2.jpg"},
                    {url: "/assets/ofertas/1/img3.jpg"},
                    {url: "/assets/ofertas/1/img4.jpg"}
                ]
            },
            {
                id: 2,
                categoria: "restaurante",
                titulo: "Cozinha Mexicana",
                descricao_oferta: "Almoço ou Jantar com Rodízio Mexicano delicioso.",
                anunciante: "Mexicana",
                valor: 32.90,
                destaque: true,
                imagens: [
                    {url: "/assets/ofertas/2/img1.jpg"},
                    {url: "/assets/ofertas/2/img2.jpg"},
                    {url: "/assets/ofertas/2/img3.jpg"},
                    {url: "/assets/ofertas/2/img4.jpg"}
                ]
            
            },
            {
                id: 4,
                categoria: "diversao",
                titulo: "Estância das águas",
                descricao_oferta: "Diversão garantida com piscinas, trilhas e muito mais.",
                anunciante: "Estância das águas",
                valor: 31.90,
                destaque: true,
                imagens: [
                    {url: "/assets/ofertas/3/img1.jpg"},
                    {url: "/assets/ofertas/3/img2.jpg"},
                    {url: "/assets/ofertas/3/img3.jpg"},
                    {url: "/assets/ofertas/3/img4.jpg"},
                    {url: "/assets/ofertas/3/img5.jpg"},
                    {url: "/assets/ofertas/3/img6.jpg"}
                ]
            }
        ]
    

    //array que ficaram as ofertas recebidas da api
    public getOfertas(): Array<Oferta>{
        return this.ofertas;
    }


    public getOfertas2(): Promise<Oferta[]> {
        //instanciando objeto promise
        return new Promise((resolve, reject) =>{
            
            console.log('point break')
            
            //simulando uma resposta do servidor verificando se a resposta foi positiva
            let deu_certo = true;

            //caso positivo apos um timeout de 3 segundos, os valores sao recebidos e encaminhados ao html
            if(deu_certo){
                //algum tipo de processamento que ao finalizar chama a funcao ou a funcao reject
                setTimeout(() => resolve(this.ofertas),3000);                
            }else{
                console.log('deu erro')
                reject({ codigo_erro:404, mensagem_erro: 'not found'})
            }
        })
        .then((ofertas: any) => {
            //esse then sera executado antes do then que foi chamado no metodo da home.component
            console.log("esse then vem antes do then da inicializacao do this.ofertasServices.getOfertas em home.component")
            return ofertas
        })

        .then((ofertas:any)=>{
            console.log("esse é o terceiro then antes de ir ao home.component")
            return ofertas
        })
    
    } 
}