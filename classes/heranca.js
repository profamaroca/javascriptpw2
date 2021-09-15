// classes: moldes, forminhas para construir objetos
// nomear com a inicial maiúscula
class Cachorro {

  // método invocado para construir um novo objeto
  constructor(novoNome, novoPeso, novoPatas) {
    this.nome = novoNome;
    this.peso = novoPeso;
    this.patas = novoPatas;
  }

  // métodos: funções que todo objeto criado com essa classe poderá executar
  respirar() {
    console.log('...respiraaaaaaaaaaaaaaando...');
  }

  // método latir()
  latir() {
    console.log('au au');
  }
}


// nova classe Peixe, adicionando o atributo booleano temEscamas
class Peixe {
  constructor(novoNome, novoPeso, novoTemEscamas){
    this.nome = novoNome
    this.peso = novoPeso
    this.temEscamas = novoTemEscamas
  }

  respirar() {
    console.log('...respiraaaaaaaaaaaaaaando...');
  }

  nadar() {
    console.log('glub glub');
  }

}


// nova classe Ave, adicionando o atributo booleano podeVoar
class Ave {
  constructor(novoNome, novoPeso, novoPodeVoar){
    this.nome = novoNome
    this.peso = novoPeso
    this.podeVoar = novoPodeVoar
  }

  respirar() {
    console.log('...respiraaaaaaaaaaaaaaando...');
  }

  bicar() {
    console.log('bic bic');
  }
}

// POR ACASO ESTAMOS REPETINDO CÓDIGO ???????????????????!!!!!!!!!!!!!!!!!!!!!
// desvantagens: correções replicadas; expansão trabalhosa; código maior e mais difícil de se manter

// herança:
// uma classe mãe (superclasse) que concentra todos os aspectos que são comuns entre as suas filhas
// classes filhas (subclasses), que herdam todos os atributos e métodos da classe mãe
// e podem acrescentar atributos e métodos específicos

// superclasse ou classe mãe
class Pet {
  constructor(novoNome, novoPeso) {
    this.nome = novoNome
    this.peso = novoPeso
  }

  respirar() {
    console.log('...respiraaaaaaaaaaaaaaando...');
  }
}

// subclasses ou classes filhas
class CachorroFilha extends Pet {
  constructor(novoNome, novoPeso, novoPelo){
    super(novoNome, novoPeso) // invocamos o construtor da superclasse/classe mãe
    this.pelo = novoPelo // continuamos o construtor da classe filha com os seus campos específicos
  }

  latir() {
    console.log('au au');
  }
}

let meuCachorroComHeranca = new CachorroFilha('Pantera', 20, 'preto e caramelo e lindo')
console.log(meuCachorroComHeranca)
console.log(`nome: ${meuCachorroComHeranca.nome}`)
meuCachorroComHeranca.respirar()

class PeixeFilha extends Pet {
  constructor(novoNome, novoPeso, novoTemEscamas){
    super(novoNome, novoPeso)
    this.temEscamas = novoTemEscamas
  }

  // sobrescrita de métodos
  respirar() {
    console.log('...respirando debaixo dágua...,');
  }

  nadar() {
    console.log('glub glub');
  }

}

let meuPeixeComHeranca = new PeixeFilha('Samu', 0.2, false)
console.log(meuPeixeComHeranca)
meuPeixeComHeranca.respirar()

class AveFilha extends Pet {
  constructor(novoNome, novoPeso, novoPodeVoar){
    super(novoNome, novoPeso)
    this.podeVoar = novoPodeVoar
  }

  bicar() {
    console.log('bic bic');
  }
}