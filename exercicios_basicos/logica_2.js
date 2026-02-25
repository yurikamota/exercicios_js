// 2 - Faça um algoritmo para receber um número qualquer e imprimir na tela se o número é par ou ímpar, positivo ou negativo.

let numero = parseInt(prompt("Digite um número: "));

if (isNaN(numero)) {
    console.log("Por favor, digite um número válido.");
} else {
    if (numero % 2 === 0) {
        console.log("O número é par.");
    } else {
        console.log("O número é ímpar.");
    } if (numero > 0) {
        console.log("O número é positivo.");
    } else if (numero < 0) {
        console.log("O número é negativo.");
    } else if (numero === 0) {
        console.log("O número é zero.");
    }
}

// tambêm poderia ser else { console.log("o número é negativo")}