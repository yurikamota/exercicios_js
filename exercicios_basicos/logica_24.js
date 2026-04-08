/* 24 - Faça um algoritmo que calcule a quantidade de litros de combustível gastos em uma viagem, 
sabendo que o carro faz 12km com um litro. Deve-se fornecer ao usuário o tempo que será gasto na viagem a sua 
velocidade média, distância percorrida e a quantidade de litros utilizados para fazer a viagem.

Fórmula: distância = tempo x velocidade.

            litros usados = distância / 12.
*/



let tempo = parseFloat(prompt("Digite o tempo de viagem (em horas): "));
let velocidade = parseFloat(prompt("Digite a velocidade média (em km/h): "));
// 1 litro de combustível é gasto a cada 12 km percorridos.
let distancia = velocidade * tempo;
let litrosConsumidos = distancia / 12;

console.log("O carro irá gastar " + litrosConsumidos.toFixed(2) + " litros de combustível para percorrer a distância de " + distancia.toFixed(2) + " km.");