// 7 - Faça um algoritmo que leia dois valores booleanos (lógicos) e determine se ambos são VERDADEIRO ou FALSO.

let primeiroValor = prompt("Digite true ou false: ").toLowerCase() === 'true';
let segundoValor = prompt("Digite true ou false: ").toLowerCase() === 'true';

if (primeiroValor && segundoValor) {
    console.log("Ambos são VERDADEIROS.");
} else {
    console.log("Um ou ambos são FALSOS.");
}


/*let primeiroNumero = parseFloat(prompt("Digite o valor do primeiro número: "));
let segundoNumero = parseFloat(prompt("Digite o valor do segundo número: "));

if (isNaN(primeiroNumero) || isNaN(segundoNumero)) {
    console.log("Por favor, digite números válidos.");
} 
else if (primeiroNumero > 65 && segundoNumero < 65) {
    console.log("O primeiro número é maior que 65 e o segundo número é menor que 65.");
} 
else if (primeiroNumero < 65 && segundoNumero > 65) {
    console.log("O primeiro número é menor que 65 e o segundo número é maior que 65.");
} 
else {
    console.log("Ambos são iguais a 65 ou estão do mesmo lado de 65.");
} */


// toLowerCase() é usado para converter a string para minúsculas, garantindo que a comparação seja case-insensitive.