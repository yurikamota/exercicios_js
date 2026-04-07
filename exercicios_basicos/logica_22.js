// 22 - Faça um algoritmo que leia dois valores inteiros A e B, imprima na tela o quociente e o resto da divisão inteira entre eles.
let A = parseInt(prompt("Digite o valor inteiro A: "));
let B = parseInt(prompt("Digite o valor inteiro B: "));

if (isNaN(A) || isNaN(B)) {
    console.log("Por favor, digite valores inteiros válidos para A e B.");
} else if (B === 0) {
    console.log("A divisão por zero não é permitida. Por favor, digite um valor diferente de zero para B.");
} else {
    let quociente = parseInt(A / B);
    let resto = A % B;

    console.log("Quociente da divisão inteira entre A e B:", quociente);
    console.log("Resto da divisão inteira entre A e B:", resto);
}