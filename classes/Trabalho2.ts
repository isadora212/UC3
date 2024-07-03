var leitor = require('readline-sync')

class Jogo{
    titulo: string
    genero: string
    classificacaoEtaria: number

    constructor(titulo: string, genero: string, classificacaoEtaria: number){
        
       this.titulo = titulo
       this.genero = genero
       this.classificacaoEtaria = classificacaoEtaria
    }
    Estratégias(){
        console.log(`Gosto de formar planos em jogos de ${this.genero}`);  
    }
    
    
    
    }
    

    

