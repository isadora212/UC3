import { log } from "console"

var leitor = require('readline-sync')

class Jogo{
    public titulo: string
    protected genero: string
    protected classificacaoEtaria: string

    constructor(titulo: string, genero: string, classificacaoEtaria: string){
        
       this.titulo = titulo
       this.genero = genero
       this.classificacaoEtaria = classificacaoEtaria
    }

    public estrategias(): void{
        console.log(`Gosto de formar planos em jogos de ${this.genero}`);  
    }

    nomeacao(){
        console.log(`Meu jogo favorito é o ${this.titulo}`);

    } 

    recomendacao(){
        console.log(`Gosto de jogos que tenham a faixa etária de seja ${this.classificacaoEtaria}, pois acho mais divertido.`);

    }

    public getJogo(): void{
        console.log(`
            Nome do Jogo: ${this.titulo}
            Gênero: ${this.genero}
            Classificação Etária: ${this.classificacaoEtaria}
        `);
    }

    public setJogo(): void{
        let nomeUpdate = leitor.question("Insira o nome do jogo: ")
        this.titulo = nomeUpdate
    }
}
  
class JogosEletronicos extends Jogo{
    protected numeroDeJogadores: number
    super(titulo: string, genero: string, classificacaoEtaria: string, numeroDeJogadores: number){
        this.titulo = titulo
        this.genero = genero
        this.classificacaoEtaria = classificacaoEtaria
        this.numeroDeJogadores = numeroDeJogadores

    }

    public getMaisInfos(): string {
        return `Título: ${this.titulo}, Gênero: ${this.genero}, Classificação Etária: ${this.classificacaoEtaria}, Número de jogadores: ${this.numeroDeJogadores}`;
   
    }

    public setMaisInfos(): 
}

    
let novojogo = new JogosEletronicos("teste", "teste", "livre")

novojogo.getJogo()
novojogo.getMaisInfos()