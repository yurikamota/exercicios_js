// 13 - Faça algoritmo que leia o nome e a idade de uma peso e imprima na tela o nome da pessoa e se ela é maior ou menor de idade. 

let nome = prompt("Digite seu nome: ");
let idade = parseInt(prompt("Digite sua idade: "));

if (isNaN(idade)) {
    console.log("Por favor, digite uma idade válida.");
} else if (idade < 18) {
    console.log("Olá " + nome + ", você é menor de idade.");
} else if (idade >= 18 && idade < 60) {
    console.log("Olá " + nome + ", você é adulto(a).");
}