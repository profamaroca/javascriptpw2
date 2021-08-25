/**arrays */

let a1 = "Bia"
let a2 = "Jennifer"
let a3 = "Vitoria"
let a4 = "Murilo"

//e se precisarmos encontrar uma pessoa dentre as alunas?
//e se fossem 600 alunas??? =[

let alunes = ["Bia", "Jennifer", "Vitoria", "Murillo", "Bia", "Jennifer", "Vitoria", "Murillo", "Bia", "Jennifer", "Vitoria", "Murillo"]

// acessando elementos
let nomeProcurado = alunes[3]
console.log(nomeProcurado)

// alterando elementos
alunes[3] = "Murilo"
console.log(alunes[3])

// propriedade length - tamanho, acessar o último elemento
console.log('tamanho do array de alunes: ' + alunes.length)
console.log('o último elemento do array de alunes: ' + alunes[alunes.length - 1])

// iterando um array inteiro com o for
for (let i = 0; i < alunes.length; i++) {
  console.log(`posição ${i} do array de alunes contém o nome ${alunes[i]}`) // logando com template string
  //console.log('posição ' + i + ' do array de alunes contém o nome ' + alunes[i])
}

// iterando um array com o forEach(myFunction)
console.log("UTILIZANDO O forEach() para alunes")
alunes.forEach(mostrarElemento)

console.log("UTILIZANDO O forEach() para professores")
let professores = ["Mari", "Adriano", "Ana Flávia", "Sérgio"]
professores.forEach(mostrarElemento)

// callback: função a ser chamada quando um certo evento é disparado
function mostrarElemento(elemento, index){
  console.log(`valor do elemento na posição ${index}: ${elemento}`)
}

// métodos: push, map, filter, find, sort, reverse, reduce e muitos outros!
// https://www.w3schools.com/jsref/jsref_obj_array.asp

console.log("UTILIZANDO O filter() para idades")
const ages = [32, 33, 16, 40, 33, 22, 15, 10, 39, 50];

let filtrado = ages.filter(checkAdult) // retorna um novo array contendo apenas os elementos que passam no filtro
console.log(filtrado)

filtrado.forEach(mostrarElemento)

// callback para realizar o filtro
function checkAdult(age) {
  return age >= 18;
}


/**objetos */
let nome = "Bia"
let curso = "DS"
let modulo = 2

let nome2 = "Vitoria"
let curso2 = "DS"
let modulo2 = 2

//IMPRATICÁVELLLLLLLLLLLLLLLLLLL

console.log("TRABALHANDO COM OBJETOS")

// objeto com várias propriedades
let alune1 = {
  nome: "Bia",
  curso: "DS",
  modulo: 2
}

let alune2 = {
  nome: "Murilo",
  curso: "DS",
  modulo: 2
}

let alune3 = {
  nome: "Vitoria",
  curso: "DS",
  modulo: 2
}

let alune4 = {
  nome: "Jennifer",
  curso: "DS",
  modulo: 2
}

console.log(alune1)
console.log(alune1.nome)
console.log(`Alune ${alune1.nome} matriculade no curso ${alune1.curso}`)
console.log(`Alune ${alune2.nome} matriculade no curso ${alune2.curso}`)
console.log(`Alune ${alune3.nome} matriculade no curso ${alune3.curso}`)
console.log(`Alune ${alune4.nome} matriculade no curso ${alune4.curso}`)

// arrays de objetos
let objAlunes = []
objAlunes.push(alune1)
objAlunes.push(alune2)
objAlunes.push(alune3)
objAlunes.push(alune4)
console.log(`array de objetos alunes: ${objAlunes}`)

objAlunes.forEach(mostrarObj)

function mostrarObj(elemento, index){
  console.log(`nome do alune na posição ${index}: ${elemento.nome}`)
  console.log(`curso do alune na posição ${index}: ${elemento.curso}`)
  console.log(`modulo do alune na posição ${index}: ${elemento.modulo}`)
}

// funções/métodos
console.log("UTILIZANDO MÉTODOS NOS OBJETOS")

let person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  age: 18,
  fullName : function() {
    return this.firstName + " " + this.lastName + " " + this.age;
  },
  happyBirthday : function() {
    this.age++
  }
}

let nomeCompleto = person.fullName()
console.log(nomeCompleto)

person.happyBirthday()
console.log(person.fullName())

let person2 = {
  firstName: "Mari",
  lastName : "Rocha",
  id       : 5566,
  age: 33,
  fullName : function() {
    return this.firstName + " " + this.lastName + " " + this.age;
  },
  happyBirthday : function() {
    this.age++
  }
}
console.log(person2.fullName())
person2.happyBirthday()
console.log(person2.fullName())

// ta-raaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaam