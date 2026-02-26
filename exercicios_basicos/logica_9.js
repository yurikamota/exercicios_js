/* 9 - Faça um algoritmo que calcule o IMC (Índice de Massa Corporal) de uma pessoa, 
leia o seu peso e sua altura e imprima na tela sua condição 
de acordo com a tabela abaixo:

Fórmula do IMC = peso / (altura) ² */

let peso = parseFloat(prompt("Digite o seu peso em kg: "));
let altura = parseFloat(prompt("Digite a sua altura em metros: "));

let IMC = peso / (altura)**2;

if (IMC < 18.5) {
    console.log("Seu IMC é:", IMC.toFixed(2), "e você está abaixo do peso.");
} else if (IMC >= 18.6 && IMC <= 24.9) {
    console.log("Seu IMC é:", IMC.toFixed(2), "e você está com o peso ideal. Parabéns!");
} else if (IMC >= 25.0 && IMC <= 29.9) {
    console.log("Seu IMC é:", IMC.toFixed(2), "e você está levemente acima do peso.");
} else if (IMC >= 30.0 && IMC <= 34.9) {
    console.log("Seu IMC é:", IMC.toFixed(2), "e você está com obesidade grau I.");
} else if (IMC >= 35.0 && IMC <= 39.9) {
    console.log("Seu IMC é:", IMC.toFixed(2), "e você está com obesidade grau II (severa).");
} else if (IMC >= 40) {
    console.log("Seu IMC é:", IMC.toFixed(2), "e você está com obesidade grau III (mórbida).");
}




/* 
Tabela Condições IMC

  

 Abaixo de 18,5   | Abaixo do peso          

 Entre 18,6 e 24,9 | Peso ideal (parabéns)  

 Entre 25,0 e 29,9 | Levemente acima do peso

 Entre 30,0 e 34,9 | Obesidade grau I 

 Entre 35,0 e 39,9 | Obesidade grau II (severa)

 Maior ou igual a 40 | Obesidade grau III (mórbida)
 */