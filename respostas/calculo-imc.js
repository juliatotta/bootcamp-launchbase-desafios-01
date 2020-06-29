/*Cálculo de IMC
Crie um programa para calcular o IMC e nível de obesidade de uma pessoa 

*/

const nome = 'Xena'
const peso = 83
const altura = 1.66

const imc = peso / (altura * altura)

if(imc >= 30) {
    console.log(`${nome}, você está acima do peso. IMC = ${imc}`)
} else {
    console.log(`${nome}, você não está acima do peso. IMC = ${imc}`)
}

