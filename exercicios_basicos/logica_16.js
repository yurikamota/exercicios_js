/* 16 - Faça um algoritmo que leia três valores que representam os três lados de um triângulo e verifique se são válidos, determine se o triângulo é 

equilátero, isósceles ou escaleno.*/

let ladoA = parseFloat(prompt("Digite o valor do lado A: "));
let ladoB = parseFloat(prompt("Digite o valor do lado B: "));
let ladoC = parseFloat(prompt("Digite o valor do lado C:"));

if (ladoA + ladoB > ladoC && 
    ladoA + ladoC > ladoB && 
    ladoB + ladoC > ladoA) {

if (ladoA === ladoB && ladoB === ladoC) {
    console.log("O triângulo é equilátero.");
} else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    console.log("O triângulo é isósceles.");
} else  {
    console.log("O triângulo é escaleno.")
} }
else {
    console.log("Os valores fornecidos não formam um triângulo válido.");
}