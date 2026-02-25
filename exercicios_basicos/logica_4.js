// 4 - Faça um algoritmo que receba um número inteiro e imprima na tela o seu antecessor e o seu sucessor

let numero = parseInt(prompt("Digite um número inteiro: "));

if (isNaN(numero)) {
    console.log("Por favor, digite um número inteiro válido.");
} else { 
    let X = numero - 1;
    let sucessor = numero + 1;

    console.log("O antecessor do número é:", antecessor);
    console.log("O sucessor do número é:", sucessor);
}