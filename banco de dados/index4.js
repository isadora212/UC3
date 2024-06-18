var leitor = require('readline-sync');
var Livro = /** @class */ (function () {
    function Livro(titulo, autor, anoPublicacao) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
    }
    Livro.prototype.obterDetalhes = function () {
        console.log(" O livro que eu estou lendo \u00E9 ".concat(this.titulo, " escrito por ").concat(this.autor, ", em ").concat(this.anoPublicacao));
    };
    return Livro;
}());
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
var autor = leitor.question("Quem escreveu? ");
var titulo = leitor.question("Qual o titulo? ");
var anoPublicacao = leitor.questionInt("Quando foi publicado? ");
var livroNovo = new Livro(titulo, autor, anoPublicacao);
console.log(livroNovo);
// new pessoa 
//dirigir():void 
