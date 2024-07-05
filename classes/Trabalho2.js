"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require('readline-sync');
var Jogo = /** @class */ (function () {
    function Jogo(titulo, genero, classificacaoEtaria) {
        this.titulo = titulo;
        this.genero = genero;
        this.classificacaoEtaria = classificacaoEtaria;
    }
    Jogo.prototype.estrategias = function () {
        console.log("Gosto de formar planos em jogos de ".concat(this.genero));
    };
    Jogo.prototype.nomeacao = function () {
        console.log("Meu jogo favorito \u00E9 o ".concat(this.titulo));
    };
    Jogo.prototype.recomendacao = function () {
        console.log("Gosto de jogos que tenham a faixa et\u00E1ria de seja ".concat(this.classificacaoEtaria, ", pois acho mais divertido."));
    };
    Jogo.prototype.getJogo = function () {
        console.log("\n            Nome do Jogo: ".concat(this.titulo, "\n            G\u00EAnero: ").concat(this.genero, "\n            Classifica\u00E7\u00E3o Et\u00E1ria: ").concat(this.classificacaoEtaria, "\n        "));
    };
    Jogo.prototype.setJogo = function () {
        var nomeUpdate = leitor.question("Insira o nome do jogo: ");
        this.titulo = nomeUpdate;
    };
    return Jogo;
}());
var JogosEletronicos = /** @class */ (function (_super) {
    __extends(JogosEletronicos, _super);
    function JogosEletronicos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JogosEletronicos.prototype.super = function (titulo, genero, classificacaoEtaria, numeroDeJogadores) {
        this.titulo = titulo;
        this.genero = genero;
        this.classificacaoEtaria = classificacaoEtaria;
        this.numeroDeJogadores = numeroDeJogadores;
    };
    JogosEletronicos.prototype.getMaisInfos = function () {
        return "T\u00EDtulo: ".concat(this.titulo, ", G\u00EAnero: ").concat(this.genero, ", Classifica\u00E7\u00E3o Et\u00E1ria: ").concat(this.classificacaoEtaria, ", N\u00FAmero de jogadores: ").concat(this.numeroDeJogadores);
    };
    return JogosEletronicos;
}(Jogo));
var novojogo = new JogosEletronicos("teste", "teste", "livre");
novojogo.getJogo();
novojogo.getMaisInfos();
