// 6 - Faça um algoritmo que leia um valor qualquer e imprima na tela com um reajuste de 5%.

let numero = parseFloat(prompt("Digite um número: "));

let reajuste = numero * 0.05;
let resultado = numero + reajuste;

console.log("O resultado de " + numero + " + 5% é ", resultado.toFixed(2));