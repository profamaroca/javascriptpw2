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
    modulo: 1
    }

let alune4 = {
    nome: "Jennifer",
    curso: "DS",
    modulo: 3
    }


// definição da função
function mostraAlune(alune) {
    console.log('nome: ' + alune.nome);
    console.log('curso: ' + alune.curso);
    console.log('modulo: ' + alune.modulo);
}

// chamadas para execução
mostraAlune(alune1);
mostraAlune(alune3);


// array com objetos criados anteriormente
let alunes = [alune1, alune2, alune3, alune4]

// para cada elemento do array, chame a função mostraAlune para execução
console.log('utilizando forEach: ')
alunes.forEach(mostraAlune);




// prática:
// a) montar um array de objetos pessoas como os da lousa
// b) usar o forEach para exibir todas as pessoas do array
// c) usar o forEach para mostrar apenas pessoas com 18 anos ou mais
// d) usar o forEach para mostrar apenas pessoas com uma idade mínima definida pelo usuário


console.log('busca pela minima');

// instalar com o comando npm install readline-sync
// puxa o modulo para dentro deste arquivo
const readline = require('readline-sync')

// solicita uma informação
const moduloBusca = readline.question('qual o modulo buscado? ')

function mostraModulo(alune) {
    if (alune.modulo == moduloBusca) console.log(alune.nome + ' está no módulo ' + moduloBusca);
}

alunes.forEach(mostraModulo);

