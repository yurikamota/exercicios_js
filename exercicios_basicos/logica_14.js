// 14 - Faça um algoritmo que receba um valor A e B, e troque o valor de A por B e o valor de B por A e imprima na tela os valores.

let A = prompt("Digite o valor de A: ");
let B = prompt("Digite o valor de B: ");

if (A === "" || B === "") {
    console.log("Por favor, digite valores válidos para A e B.");
} else {
    let temp = A; // temp é uma variável temporária para armazenar o valor de A
    A = B; // A recebe o valor de B
    B = temp; // B recebe o valor armazenado em temp (que é o valor original de A)

    console.log("Após a troca, o valor de A é:", A);
    console.log("Após a troca, o valor de B é:", B);
}