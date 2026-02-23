var numeroMacas = 4;
var todasAsMacasSaoVerdes = false;

if (numeroMacas > 1 && todasAsMacasSaoVerdes === true) {
   console.log("Temos mais de uma maçã e todas as maçãs são verdes.");
} else {
    console.log("Ou não temos mais de uma maçã ou nem todas as maçãs são verdes.");
}

//Explicação
// var numeroMacas = 4; // “Eu tenho 4 maçãs na minha cesta.”
// var todasAsMacasSaoVerdes = false; // “Nem todas as maçãs são verdes.”
// if (numeroMacas > 1 && todasAsMacasSaoVerdes === true) // "Eu tenho mais de uma maçã?" Sim. "Todas as maçãs são verdes?" Não. Então a condição é falsa.
// O símbolo && é o operador lógico "E". Ele verifica se ambas as condições são verdadeiras. Se uma delas for falsa, o resultado será falso.
// Então, a mensagem exibida será: "Ou não temos mais de uma maçã ou nem todas as maçãs são verdes." porque a condição completa é falsa.
// Escrever === true em boolean é redundante. Uso neste caso apenas para explicação. O código poderia ser simplificado para: if (numeroMacas > 1 && todasAsMacasSaoVerdes)
