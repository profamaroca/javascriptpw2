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
    modulo: 2
    }


// definição da função
function mostraAlune(alune) {
    console.log('mostrando alune:')
    console.log('nome: ' + alune.nome);
    console.log('curso: ' + alune.curso);
    console.log('modulo: ' + alune.modulo);
    console.log('-----------')
}

// chamadas para execução
mostraAlune(alune1);
mostraAlune(alune3);


// array com objetos criados anteriormente - sempre iniciando na posição 0
let alunes = [alune1, alune3, alune4];
mostraAlune(alunes[2]);

// para cada elemento do array alunes, chame a função mostraAlune para execução
console.log('utilizando for Each: ');
alunes.forEach(mostraAlune);




// prática:
// a) montar um array de objetos pessoas como os da lousa
// b) usar o forEach para exibir todas as pessoas do array
// c) usar o forEach para mostrar apenas alunes do módulo 2


console.log('mostrando apenas Módulo 2:');
alunes.forEach(mostraModulo2);

function mostraModulo2(alune){
    if ( alune.modulo == 2 ) {
        mostraAlune(alune);
    }
}

// d) usar o forEach para mostrar apenas alunes do módulo desejado

console.log('busca pelo módulo desejado');

// instalar com o comando npm install readline-sync
// puxa o modulo para dentro deste arquivo
const readline = require('readline-sync')

// solicita uma informação
const moduloBusca = readline.question('qual o modulo buscado? ')

// definição de função que mostra apenas o módulo desejado
function mostraModulo(alune) {
    if (alune.modulo == moduloBusca) console.log(alune.nome + ' está no módulo ' + moduloBusca);
}

alunes.forEach(mostraModulo);

