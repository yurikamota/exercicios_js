var variavelCoercao = 37;
var variavelSemCoercao = 37;

if (variavelCoercao == "37") {
    console.log("Comparação com coerção")
}

if (variavelSemCoercao === "37") {
    console.log("Este trecho não será executado, sem coerção")
}

// Somente a linha 5 será executada pois o operador == realiza a comparação com coerção: 37 e "37" são tipos diferentes sendo um número e o outro string. Nesse caso o operador == considerou que apesar de serem tipos diferentes, os valores são equivalentes, então a comparação retornou verdadeiro. Já o operador === realiza a comparação sem coerção, ou seja, ele verifica se os valores são iguais e se os tipos são iguais. Nesse caso, 37 é um número e "37" é uma string, então a comparação retornou falso e o trecho dentro do if não foi executado.