var Produto = /** @class */ (function () {
    function Produto(nome, preco, marca) {
        this.nome = nome;
        this.preco = preco;
        this.marca = marca;
    }
    Produto.prototype.calcularLucro = function (precoVenda) {
        return precoVenda - this.preco;
    };
    Produto.prototype.exibirInformacoes = function () {
        console.log("Produto: ".concat(this.nome, " (").concat(this.marca, ")"));
        console.log("Pre\u00E7o: R$ ".concat(this.preco.toFixed(2)));
    };
    return Produto;
}());
var Venda = /** @class */ (function () {
    function Venda(produto, quantidade, data) {
        this.produto = produto;
        this.quantidade = quantidade;
        this.data = data;
        this.valorTotal = this.calcularValorTotal();
    }
    Venda.prototype.calcularValorTotal = function () {
        return this.produto.preco * this.quantidade;
    };
    Venda.prototype.aplicarDesconto = function (percentualDesconto) {
        var desconto = this.valorTotal * (percentualDesconto / 100);
        this.valorTotal -= desconto;
    };
    Venda.prototype.exibirInformacoes = function () {
        console.log("Data da venda: ".concat(this.data.toLocaleDateString()));
        console.log("Produto vendido:");
        this.produto.exibirInformacoes();
        console.log("Quantidade: ".concat(this.quantidade));
        console.log("Valor total: R$ ".concat(this.valorTotal.toFixed(2)));
    };
    return Venda;
}());
// Criando alguns produtos
var produto1 = new Produto("Smart TV", 2500.00, "Samsung");
var produto2 = new Produto("Smartphone", 1500.00, "Apple");
var produto3 = new Produto("Notebook", 3500.00, "Dell");
// Realizando algumas vendas
var dataVenda1 = new Date();
var venda1 = new Venda(produto1, 2, dataVenda1);
var venda2 = new Venda(produto2, 1, dataVenda1);
var venda3 = new Venda(produto3, 3, dataVenda1);
// Exibindo informações de um produto específico
console.log("Informações do produto 1:");
produto1.exibirInformacoes();
// Calculando o lucro de um produto específico
var precoVendaProduto1 = 2800.00; // Preço de venda hipotético
var lucroProduto1 = produto1.calcularLucro(precoVendaProduto1);
console.log("Lucro do produto 1: R$ ".concat(lucroProduto1.toFixed(2)));
// Exibindo informações de uma venda específica
console.log("\nInformações da venda 2:");
venda2.exibirInformacoes();
// Calculando o total de vendas realizadas
var totalVendas = venda1.valorTotal + venda2.valorTotal + venda3.valorTotal;
console.log("\nTotal de vendas realizadas: R$ ".concat(totalVendas.toFixed(2)));
