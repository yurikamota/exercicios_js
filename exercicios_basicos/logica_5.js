// 5 - Faça um algoritmo que leia o valor do salário mínimo e o valor do salário de um usuário, calcule quantos salários mínimos esse usuário ganha e imprima na tela o resultado. (Base para o Salário mínimo R$ 1.293,20).

let salarioMinimo = 1293.20;
let salarioUsuario = parseFloat(prompt("Digite o valor do salário do usuário: "));

if (isNaN(salarioUsuario)) {
    console.log("Por favor, digite um valor de salário válido.");
} else { 
    let quantidadeSalariosMinimos = salarioUsuario / salarioMinimo;

    console.log("O usuário ganha aproximadamente", quantidadeSalariosMinimos.toFixed(2), "salários mínimos.");
}

// O método toFixed(2) é usado para arredondar o resultado para 2 casas decimais, tornando a resposta mais legível.