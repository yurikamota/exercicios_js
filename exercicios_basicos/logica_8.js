// 8 - Faça um algoritmo que leia três valores inteiros diferentes e imprima na tela os valores em ordem decrescente.

let valor1 = parseInt(prompt("Digite o primeiro valor inteiro: "));
let valor2 = parseInt(prompt("Digite o segundo valor inteiro: "));
let valor3 = parseInt(prompt("Digite o terceiro valor inteiro: "));

if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3)) {
    console.log("Por favor, digite valores inteiros válidos.");
} else if (valor1 === valor2 || valor1 === valor3 || valor2 === valor3) {
    console.log("Por favor, digite valores inteiros diferentes.");
} else {
    let valores = [valor1, valor2, valor3]; // isso cria uma array, array é uma lista.
    valores.sort(function(a, b) {
        return b - a; // Ordena em ordem decrescente e a - b para ordem crescente
    });

    console.log("Valores em ordem decrescente:", valores.join(", "));
}

// o sort pega dois valores e pergunta quem deve ir primeiro
// return b - a significa que se b for maior que a, ele retorna um número positivo, indicando que b deve vir antes de a na ordem decrescente. Se a for maior que b, ele retorna um número negativo, indicando que a deve vir antes de b. Se ambos forem iguais, retorna 0, indicando que a ordem entre eles não importa.
// join(", ") é usado para converter a array em  texto

// Outro exemplo de resposta: 
/* let valor1 = parseInt(prompt("Digite o primeiro valor inteiro: "));
let valor2 = parseInt(prompt("Digite o segundo valor inteiro: "));
let valor3 = parseInt(prompt("Digite o terceiro valor inteiro: "));

if (valor1 > valor2 && valor1 > valor3) {
    if (valor2 > valor3) {
        console.log(valor1, valor2, valor3);
    } else {
        console.log(valor1, valor3, valor2);
    }
}
else if (valor2 > valor1 && valor2 > valor3) {
    if (valor1 > valor3) {
        console.log(valor2, valor1, valor3);
    } else {
        console.log(valor2, valor3, valor1);
    }
}
else {
    if (valor1 > valor2) {
        console.log(valor3, valor1, valor2);
    } else {
        console.log(valor3, valor2, valor1);
    }
}
    
    */