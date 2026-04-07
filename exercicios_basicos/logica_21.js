// 21 - Faça um algoritmo que mostre um valor aleatório entre 0 e 100.

let numeroSorteado = Math.floor(Math.random() * 101); // Math.random() gera um número decimal entre 0 (inclusive) e 1 (exclusive). Multiplicando por 101, obtemos um número entre 0 (inclusive) e 101 (exclusive). Em seguida, usamos Math.floor() para arredondar para baixo, garantindo que o resultado seja um número inteiro entre 0 e 100 (inclusive).

console.log("Número sorteado:", numeroSorteado);