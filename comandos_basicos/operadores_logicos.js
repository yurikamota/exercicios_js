var variavel1 =  53;
var variavel2 = true;
var variavelTexto = "zero";
var variavelNumero = "24";
var variavelLogica = false;
var variavelCurta = "texto curto";

if (variavel2 && variavelNumero == 24) { // retorno da decisão é verdadeiro
    console.log("A variável 2 é verdadeira e a variável número é igual a 24.");
} else { // retorno da decisão é falso
    console.log("A variável 2 é falsa ou a variável número não é igual a 24.");
}

if (variavel1 > 50) {
    console.log(variavel1 + " é maior que 50.");
}

if (variavelTexto != "um") {
    console.log(variavelTexto + " é diferente de um.");
}

if (!variavelLogica) {
    console.log("Negação de variavelLogica é verdadeira, ou seja, variavelLogica é falsa.");
}

if (variavelTexto != variavel1) {
    console.log("Valor das variáveis é diferente");
}

// Não lógico !
// Menor que <
// Menor ou igual <=
// Maior que >
// Maior ou igual >=
// Igualdade == (comparação de valor, não compara tipo)
// Igualdade estrita === (comparação de valor e tipo)
// Desigualdade != (comparação de valor, não compara tipo)
// Desigualdade estrita !== (comparação de valor e tipo)
// E lógico &&
// OU lógico ||