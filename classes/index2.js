var leitor = require('readline-sync');
var Carro = /** @class */ (function () {
    function Carro(motor, rodas, marca, cor, kmmax) {
        this.motor = motor;
        this.rodas = rodas;
        this.marca = marca;
        this.cor = cor;
        this.kmmax = kmmax;
    }
    Carro.prototype.dirigir = function () {
        console.log("Estou dirigindo meu ".concat(this.marca));
    };
    Carro.prototype.acelerar = function () {
        console.log("O seu ".concat(this.marca, " chegou a ").concat(this.kmmax, " km/h"));
    };
    Carro.prototype.lavar = function () {
        console.log("Estou lavando meu ".concat(this.marca));
    };
    return Carro;
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
var motorNovo = leitor.questionFloat("Qual o tipo do seu motor? ");
var rodasNovo = leitor.questionInt("Qual o aro da roda do carro? ");
var marcaNovo = leitor.question("Qual a marca do carro? ");
var corNovo = leitor.question("Qual a cor do carro? ");
var kmsNovo = leitor.questionInt("Qual a quilometragem máxima ");
var carroNovo = new Carro(motorNovo, rodasNovo, marcaNovo, corNovo, kmsNovo);
console.log(carroNovo);
