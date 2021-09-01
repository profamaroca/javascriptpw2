// criar objetos soltos pode ser perigoso!!!!
// os objetos não possuem um referencial padrão

let person1 = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName + " " + this.age;
  },
  happyBirthday : function() {
    this.age++
  }
}

let person2 = {
  firstName: "Mari",
  lastName : "Rocha",
  age: 33,
  fullName : function() {
    return this.firstName + " " + this.lastName + " " + this.age;
  }
}

// classes: moldes, forminhas para construir objetos!
// nomear com a inicial maiúscula
class Carro {

  // método invocado para construir um novo objeto
  constructor(novoNome, novoAno) {
    this.nome = novoNome;
    this.ano = novoAno;
  }

  calculaIdade(anoAtual) {
    return anoAtual - this.ano;
  }

}

// construindo um novo objeto da classe Carro
let meuCarro = new Carro("gol", 2011)
console.log(meuCarro)
// testando campos e métodos
console.log(`nome do meu carro: ${meuCarro.nome}`)
console.log(`idade: ${meuCarro.calculaIdade(2021)}`)

let outroCarro = new Carro("opala", 1990)
console.log(outroCarro)
console.log(`nome do meu carro: ${outroCarro.nome}`)
console.log(`idade: ${outroCarro.calculaIdade(2021)}`)

