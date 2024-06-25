var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var leitor = require('readline-sync');
var Pessoa = /** @class */ (function () {
    function Pessoa(idade, quando, onde, quem) {
        this.idade = idade;
        this.quando = quando;
        this.onde = onde;
        this.quem = quem;
    }
    Pessoa.prototype.Comprimetar = function () {
        console.log("Estou comprimentando ".concat(this.quem));
    };
    Pessoa.prototype.Conhecer = function () {
        console.log("Eu conheci ela ".concat(this.quando, " em ").concat(this.onde, " e ela possui").concat(this.quem, " anos"));
    };
    return Pessoa;
}());
var Crianca = /** @class */ (function (_super) {
    __extends(Crianca, _super);
    function Crianca() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Crianca.prototype.super = function (idade, quando, onde, quem) {
        this.idade = 7;
        this.quando = "sexta";
        this.onde = "Canoas";
        this.quem = "Carol";
    };
    return Crianca;
}(Pessoa));
var Idoso = /** @class */ (function (_super) {
    __extends(Idoso, _super);
    function Idoso() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Idoso.prototype.super = function (idade, quando, onde, quem) {
        this.idade = 60;
        this.quando = "Segunda";
        this.onde = "São Leopoldo";
        this.quem = "Jurema";
    };
    return Idoso;
}(Pessoa));
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
var quemNovo = leitor.question("Quem e a pessoa? ");
var novoOnde = leitor.question("Onde a conheceu? ");
var novaIdade = leitor.questionInt("Qual idade possui? ");
var novoQuando = leitor.question("Quando a conheceu? ");
var pessoaNova = new Pessoa(quemNovo, novoOnde, novaIdade, novoQuando);
console.log(pessoaNova);
// new pessoa 
//dirigir():void 
