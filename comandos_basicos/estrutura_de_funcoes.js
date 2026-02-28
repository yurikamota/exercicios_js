function estruturaDeUmaFuncao(parametro1, parametro2) {
    // Corpo da função
    var calculo = parametro1 + parametro2;
    if (calculo > 10) {
        return "O resultado é maior que 10."; // Aqui estamos usando a palavra-chave return para retornar uma string que indica que o resultado é maior que 10. A função termina aqui e o valor retornado pode ser usado em outro lugar do código.
    } else {
        return "O resultado é 10 ou menor.";
    }
}

var num1 = parseFloat(prompt("Digite o primeiro número: ")); // Essa variavel substitui o parametro1 da função, ou seja, o valor digitado pelo usuário será passado para a função como argumento.
var num2 = parseFloat(prompt("Digite o segundo número: ")); // 

var resultado = estruturaDeUmaFuncao(num1, num2); // Aqui estamos chamando a função estruturaDeUmaFuncao e passando num1 e num2 como argumentos. O resultado da função será armazenado na variável resultado.

console.log(resultado); // Aqui estamos imprimindo o resultado no console. Dependendo dos valores digitados pelo usuário, a mensagem será diferente.

// Com valores pré-definidos poderia ser:
/* 
console.log(estruturaDeUmaFuncao(5, 3)); // O resultado é 10 ou menor.
console.log(estruturaDeUmaFuncao(7, 5)); // O resultado é maior que 10.
console.log(estruturaDeUmaFuncao(2, 8)); // O resultado é 10 ou menor.
console.log(estruturaDeUmaFuncao(10, 1)); // O resultado é maior que 10.
*/