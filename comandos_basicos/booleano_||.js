var numeroCarros = 6;
var todosCarrosMesmaMarca = false;

if (numeroCarros === 5 || todosCarrosMesmaMarca === true) {
    console.log("Ou todos os carros são da mesma marca)");
    console.log("Ou temos exatamente 5 carros.");
    console.log("Ou as duas coisas juntas.");
} else {
    console.log("Não temos cinco carros e nem todos são da mesma marca.");
}

// O uso de === 5 verifica se o número de carros é exatamente 5. O uso de === true verifica se a variável todosCarrosMesmaMarca é verdadeira. O operador || (OU) retorna verdadeiro se pelo menos uma das condições for verdadeira. Portanto, a mensagem exibida será: "Não temos cinco carros e nem todos são da mesma marca." porque ambas as condições são falsas.
// O uso de === true em todosCarrosMesmaMarca é redundante, pois a variável já é um booleano. O código poderia ser simplificado para: if (numeroCarros === 5 || todosCarrosMesmaMarca)