class Produto {
    nome: string;
    preco: number;
    marca: string;

    constructor(nome: string, preco: number, marca: string) {
        this.nome = nome;
        this.preco = preco;
        this.marca = marca;
    }

    calcularLucro(precoVenda: number): number {
        return precoVenda - this.preco;
    }

    exibirInformacoes(): void {
        console.log(`Produto: ${this.nome} (${this.marca})`);
        console.log(`Preço: R$ ${this.preco.toFixed(2)}`);
    }
}

class Venda {
    produto: Produto;
    quantidade: number;
    data: Date;
    valorTotal: number;

    constructor(produto: Produto, quantidade: number, data: Date) {
        this.produto = produto;
        this.quantidade = quantidade;
        this.data = data;
        this.valorTotal = this.calcularValorTotal();
    }

    calcularValorTotal(): number {
        return this.produto.preco * this.quantidade;
    }

    aplicarDesconto(percentualDesconto: number): void {
        const desconto = this.valorTotal * (percentualDesconto / 100);
        this.valorTotal -= desconto;
    }

    exibirInformacoes(): void {
        console.log(`Data da venda: ${this.data.toLocaleDateString()}`);
        console.log("Produto vendido:");
        this.produto.exibirInformacoes();
        console.log(`Quantidade: ${this.quantidade}`);
    }
}

const produto1 = new Produto("Smart TV", 2500.00, "Samsung");
const produto2 = new Produto("Smartphone", 1500.00, "Apple");
const produto3 = new Produto("Notebook", 3500.00, "Dell");


const dataVenda1 = new Date();
const venda1 = new Venda(produto1, 2, dataVenda1);
const venda2 = new Venda(produto2, 1, dataVenda1);
const venda3 = new Venda(produto3, 3, dataVenda1);




