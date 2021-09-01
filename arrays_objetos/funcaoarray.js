
var arrayTeste = [4,-3,-2,-1,0,1,2,3,4,-9, 0, 4, -1, 3]

function arrayNumPositivo(array) {
    var arrayDeEntrada = array
    var arrayNumsPositivos = []

    for (i = 0; i < arrayDeEntrada.length; i++){
        
        if (arrayDeEntrada[i] > 0) {
            arrayNumsPositivos.push(arrayDeEntrada[i])
        }

    }

    return arrayNumsPositivos
}



console.log(arrayNumPositivo(arrayTeste))