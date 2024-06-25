var leitor = require('readline-sync')

class Pessoa{
    idade: number
    quando: string
    onde: string
    quem: string
   
    constructor(idade: number, quando: string, onde: string, quem: string){
        this.idade = idade
        this.quando = quando
        this.onde = onde
        this.quem = quem
    }

    Comprimetar(){
        console.log(`Estou comprimentando ${this.quem}`);
    }

    Conhecer(){
        console.log(`Eu conheci ela ${this.quando} em ${this.onde} e ela possui${this.quem} anos`);
    }
   
}
    class Crianca extends Pessoa{
        super(idade: number, quando: string, onde: string, quem: string){
            this.idade = 7
            this.quando = "sexta"
            this.onde = "Canoas"
            this.quem = "Carol"
    }

}
    
    class Idoso extends Pessoa{
        super(idade: number, quando: string, onde: string, quem: string){
        this.idade = 60
        this.quando = "Segunda"
        this.onde = "São Leopoldo"
        this.quem = "Jurema"
        
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

 var quemNovo = leitor.question("Quem e a pessoa? ")
 var novoOnde = leitor.question("Onde a conheceu? ")
 var novaIdade = leitor.questionInt("Qual idade possui? ")
 var novoQuando = leitor.question("Quando a conheceu? ")

 var pessoaNova = new Pessoa(quemNovo, novoOnde, novaIdade, novoQuando)

 console.log(pessoaNova)

        
 // new pessoa 
 //dirigir():void 