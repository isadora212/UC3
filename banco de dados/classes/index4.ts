var leitor = require('readline-sync')

class Livro{
    titulo: string
    autor: string
    anoPublicacao: number
   
   
    constructor(titulo: string, autor: string, anoPublicacao: number){
        this.titulo = titulo
        this.autor = autor
        this.anoPublicacao = anoPublicacao
    
    }

    
    obterDetalhes(){
        console.log(` O livro que eu estou lendo é ${this.titulo} escrito por ${this.autor}, em ${this.anoPublicacao}`);
    }
   
}
    
 /* 
 motor: number
 rodas: number
 marca: string
 cor: string
 kmmax: number

 NUMBER e STRING -> Tipagens Genéricas
 INT e FLOAT -> Tipagem Numérica Primitiva
 STRING, CHAR, VARCHAR -> Tipagens Primitivas de Texto
 */

 var autor = leitor.question("Quem escreveu? ")
 var titulo = leitor.question("Qual o titulo? ")
 var anoPublicacao = leitor.questionInt("Quando foi publicado? ")
 
 var livroNovo = new Livro(titulo, autor, anoPublicacao)

 console.log(livroNovo)

        
 // new pessoa 
 //dirigir():void 