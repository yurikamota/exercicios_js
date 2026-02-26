// 10 - Faça um algoritmo que leia três notas obtidas por um aluno, e imprima na tela a média das notas  e se o aluno foi aprovado ou reprovado. Para o aluno ser considerado aprovado sua média final deve ser maior ou igual a 7.

let nota1 = parseFloat(prompt("Digite a primeira nota: "));
let nota2 = parseFloat(prompt("Digite a segunda nota: "));
let nota3 = parseFloat(prompt("Digite a terceira nota: "));

let media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
    console.log("A média do aluno é:", media.toFixed(2), "e o aluno foi aprovado.");
} else {
    console.log("A média do aluno é:", media.toFixed(2), "e o aluno foi reprovado.");
}