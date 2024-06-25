class Prof{
    nome: string
    idade: number
    ano_exp: number

    constructor(nome: string, idade: number, ano_exp: number){
        this.nome = nome
        this.idade = idade
        this.ano_exp = ano_exp

        getProf(){
            console.log(`Olá meu nome ${this.nome}, trabalho há ${this.ano_exp}, e tenho ${this.idade} anos`)
    }
}

}

class Escola{
    prof: Prof
    nome_esc: string
    end_esc: string
    num_esc: number

    constructor(prof: Prof, nome_esc: string, end_esc: string, num_esc: number){
        this.prof = prof
        this.nome_esc = nome_esc
        this.end_esc = end_esc
        this.num_esc = num_esc
    

}        
    }
   
