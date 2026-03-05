// 17 - Faça um algoritmo que leia uma temperatura em Fahrenheit e calcule a temperatura correspondente em grau Celsius. Imprima na tela as duas temperaturas.

// Fórmula: C = (5 * ( F-32) / 9)

let tempFahrenheit = parseFloat(prompt("Digite a temperatura em Fahrenheit: "));
let tempCelsius = (5 * (tempFahrenheit - 32)) / 9; 

console.log(tempFahrenheit.toFixed(2) + "°F é equivalente a " + tempCelsius.toFixed(2) + "°C.");