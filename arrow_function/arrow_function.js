// relembrando: filtrar valores em uma lista/array

const idades = [32, 63, 16, 40, 91, 10];

// definindo função externa
let adultos = idades.filter(checkAdultos)
console.log(adultos)
function checkAdultos(idade) {
  return idade >= 18
}

// reescrevendo com arrow function (flecha) - não é necessário definir a função externa:
adultos = idades.filter( (idade) => {
  return idade >= 18
} )
console.log(adultos)


// definindo função externa
let idosos = idades.filter(checkIdosos)
console.log(idosos)
function checkIdosos(idade) {
  return idade >= 60
}

// reescrevendo com arrow function (flecha):
idosos = idades.filter((idade) => {
  return idade >= 60
})
console.log(idosos)

/* não é possível criar uma função que receba parâmetros externos para usar como filtro, por ex:

filtrados = idades.filter(ckeckMinima(idade,minima))
console.log(filtrados)

function checkMinima(idade, minima) {
  return idade >= minima
}
*/

// A CEREJINHA: se for necessário um parâmetro externo para idade mínima
const minima = 40 // poderia ser informado pela pessoa usuária!
filtrados = idades.filter((idade) => {
  return idade >= minima
})
console.log(filtrados)