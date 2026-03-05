// Declaração (Statement)
function minhaFuncao(param1) {
    console.log("Executa uma ação, mas não retorna um valor.");
}
if (1 !== 2) {
    console.log("Um IF é uma declaração");
}
console.log(minhaFuncao);

// Expressão (Expression)
var minhaOutraFuncao = function(param1) {
    console.log("Executa outra ação e pode retornar um valor.");
}
console.log(minhaOutraFuncao);

// Uma soma é uma expressão
var soma = 5 + 7;
console.log("Valor armazenado na variável 'soma': " + soma);