
/* Escreva um script para verificar se um jovem tem idade apropriada para dirigir,
logando o resultado no console */

/* Adicione ao script anterior uma verificação para avaliar também se o jovem está alcoolizado
antes de decidir se é seguro dirigir, utilizando operadores lógicos */

/* Caso a pessoa tenha bebido, imprimir na tela tantas vezes quanto a idade da pessoa
*/

const idadeMin = 18

var idade = 10
var bebeu = true

if ((idade >= idadeMin) && (bebeu == false)) {
  console.log('pode dirigir')
} else {
  // a idade é invalida ou a pessoa bebeu???
  if (bebeu == true){
    for (var i = 1; i <= idade; i++) {
      console.log('PELA ' + i + 'a')
      console.log('VOCE ESTA ALCOOLIZADO NAO DIRIJA!')
    }    
  } else {
    console.log('calma, bebe')
  }  
}

/* Exemplo 3: Logar no console os números pares entre 0 e 100 */

// repetição
// for
// https://www.w3schools.com/js/js_loop_for.asp

// escopo local com let
// criar variáveis com a palavra let limita o escopo de existência da variável
for (let j = 0; j <= 100; j += 2){
  console.log(j)
}
// console.log('j após o for: ' + j) gera um ReferencError


// while

i = 1
let limiteMax = 5

while (i <= limiteMax) {
  console.log('logando pela ' + i + 'a vez')
  i++
}

let num = 24
let resto = num % 2

if (resto == 0) {
  console.log('é par')
} else {
  console.log('é ímpar')
}


// anterior

// declarando, definindo, configurando
function anterior(num) {
  let ant = num - 1
  return ant
}

// invocar
let retorno = anterior(100)
console.log(retorno)

console.log(anterior(346864))

console.log(anterior(-345245))

// triplo

// declarar
function triplo(num){
  return num*3
}

// usar
console.log(triplo(3))
console.log(triplo(7))

// triplo do anterior

console.log(triplo(anterior(10)))


// triplo do triplo

console.log(triplo(triplo(4)))

// anterior do anterior

console.log(anterior(anterior(0)))


/*
  Podemos imaginar alguns critérios para um número da sorte:
  é positivo;
  é negativo;
  é par;
  é ímpar;
  é um múltiplo de 5;
  não é 17;
*/

// número de sorte da Mari: é positivo E é ímpar E não é 17
// 15 é um número da sorte; 20 não porque é par

let num = 26
if ( (num > 0) && ((num % 2) != 0) && (num != 17)) {
  console.log(num + ' é um número de sorte pra mari')
} else {
  console.log(num + ' não é da sorte pra mari')
}

// número de sorte da Vitória: é negativo OU é par

function eNegativo(num) {
  if (num < 0) {
    return true
  } else {
    return false
  }
}

function ePar(num) {
  return (num % 2) == 0 
}

num = -10
if ( eNegativo(num) && ePar(num)){
  console.log(num + ' é da sorte pra Vitória')
} else {
  console.log(num + ' não é da sorte pra Vitória')
}

// número de sorte de Gui: é positivo OU é negativo
num = 0
if ( !eNegativo(num) || eNegativo(num)){
  console.log(num + ' é da sorte pro Gui')
} else {
  console.log(num + ' não é da sorte pro Gui')
}

// Matheus

// Murillo

// Jennifer

// funções são lindas <3