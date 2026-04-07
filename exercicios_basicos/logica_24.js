let tempo = parseFloat(prompt("Digite o tempo de viagem (em horas): "));
let velocidade = parseFloat(prompt("Digite a velocidade média (em km/h): "));

let distancia = velocidade * tempo;
let litrosConsumidos = distancia / 12;

console.log("O carro irá gastar " + litrosConsumidos.toFixed(2) + " litros de combustível para percorrer a distância de " + distancia.toFixed(2) + " km.");