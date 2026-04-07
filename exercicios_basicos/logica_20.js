// 20 - Faça um algoritmo que receba um valor inteiro e imprima na tela a sua tabuada.

let numInt = parseInt(prompt("Digite um número inteiro: "));


if (isNaN(numInt)) {
    console.log("Por favor, digite um número inteiro válido.");
} else {

        console.log('Tabuada do ' + numInt + ':');
        for (let j = 1; j <= 10; j++) {
            console.log(numInt + " x " + j + " = " + (numInt * j));
        }
    
}