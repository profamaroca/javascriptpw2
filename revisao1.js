console.log('Vai começar a revisão JS')

/* Exemplo 1: Vamos atribuir notas entre 0 e 10 a 3 variáveis p1, p2 e p3, calcular a média e 
decidir a situação da pessoa estudante: se está aprovada (maior ou igual a 7), 
em recuperação (entre 5 e 7) ou reprovada (menor que 5) */

// o que são variáveis?
// var - escopo global
var p1 = 4
var p2 = 3
var p3 = 4

var media = (p1 + p2 + p3)/3
console.log('a media é ' + media)

if (media >= 7) {
  console.log('passou parabéns')
} else { // já sabemos que a média é menor que 7
  if (media >= 5) {
    console.log('recuperação ufa')
  } else { // a média é menor que 5
    console.log('reprovou, professora!')
  }
}

console.log('fim do exemplo 1')


var nome = 'mari'
nome = 'mariana'

// const - não pode ser alterada
const x = 5
// x = 7 > gera um erro de execução


// tipos de dados
// quais já conhecemos?
// number
var x = 10
console.log('tipo de x: ' + typeof x)
var nome = 'mari'
console.log('tipo da var nome: ' + typeof nome)

media = 5
var foiAprovado = (media >= 7)
console.log('aprovado: ' + foiAprovado)
console.log('tipo da var foiAprovado: ' + typeof foiAprovado)

var p1 = 10
console.log('tipo de p1: ' + typeof p1)
p1 = 'haha'
console.log('tipo de p1: ' + typeof p1)
p1 = (media >= 10)
console.log('tipo de p1: ' + typeof p1)

// https://www.w3schools.com/js/js_typeof.asp


// operadores de atribuição
// atribuição aritmética += -= *= /=

var x = 10
var y = 20

x += y // o mesmo que x = x + y

console.log(x)


// operadores aritméticos
// adição +
// subtração -
// multiplicação *
// divisão /
// resto de uma divisão inteira (também chamado de módulo) %
// incremento x++ ++x

var x = 1
console.log(x++) // primeiro loga, depois incrementa
console.log(x) // valor ja incrementado

var y = 1
console.log(++y) // primeiro incrementa, depois loga

// operadores de comparação
// == para verificar conteúdo
console.log(1 == 1)
console.log(1 == '1') // considerar '1' como o mesmo valor de 1

// === para verificar conteúdo E tipo
console.log(1 === '1')
console.log(1 === 1)

// != para verificar se é diferente
console.log(1 != 2)
console.log(2 != 2)


/* Exemplo 2: vamos atribuir 3 variáveis diferentes e verificar se o valor da primeira
está entre o valor da segunda e o valor da terceira. Por exemplo:
3 2 5: 3 está entre 2 e 5? sim
0 5 10: 0 está entre 5 e 10? não */

var n1 = 10
var n2 = 2
var n3 = 5

// n2 <= n1 <= n3 ?????

// combinando condições com operadores lógicos
// && : ambas as condições devem ser verdadeiras para o if ser verdadeiro


if ( n2 < n1 && n1 < n3 ) {
  console.log('sim, ' + n1 + ' está entre ' + n2 + ' e ' + n3)
} else {
  console.log('não, ' + n1 + ' não está entre ' + n2 + ' e ' + n3)
}


/* Exemplo 3A: Verifique se uma pessoa já pode se aposentar. Os casos positivos são:
1) tempo de trabalho > 40
OU
2) idade > 80 
*/

// || : basta uma das condições ser verdadeira para o if ser verdadeiro

var trabalho = 45
var idade = 76

if ( trabalho > 40 || idade > 80 ) {
  console.log('já pode se aposentar e morrer')
} else {
  console.log('você é apenas um trabalhador explorado')
}


/* Exemplo 3B: Verifique se uma pessoa já pode se aposentar. Os casos positivos são:
1) tempo de trabalho > 40
OU
2) idade > 80
OU
3) tempo de trabalho > 35 E idade > 75
*/

// || : basta uma das condições ser verdadeira para o if ser verdadeiro

var trabalho = 50
var idade = 76

if ( (trabalho > 40) || (idade > 80) || (trabalho > 35 && idade > 75)) {
  console.log('já pode se aposentar e morrer')
} else {
  console.log('você é apenas um trabalhador explorado')
}