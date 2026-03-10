/* 18 - Francisco tem 1,50m e cresce 2 centímetros por ano, enquanto Sara tem 1,10m e cresce 3 centímetros por ano. 
Faça um algoritmo que calcule e imprima na tela em quantos anos serão necessários para que Francisco seja maior que Sara. */

let alturaFrancisco = 1.50;
let alturaSara = 1.10;
let crescimentoFrancisco = 0.02;
let crescimentoSara = 0.03;

let anos = 0;

while (alturaFrancisco <= alturaSara) {
    alturaFrancisco += crescimentoFrancisco;
    alturaSara += crescimentoSara;
    anos++;
} 

console.log("Serão necessários " + anos + " anos para que Francisco seja maior que Sara.");

// o conceito de while é utilizado para criar um loop que continua executando enquanto uma condição for verdadeira. 
// No exemplo acima, o loop while continua a executar enquanto a altura de Francisco for menor ou igual à altura de Sara. 
// A cada iteração do loop, as alturas de Francisco e Sara são atualizadas com seus respectivos crescimentos anuais, 
// e a variável anos é incrementada para contar quantos anos se passaram até que Francisco seja maior que Sara.