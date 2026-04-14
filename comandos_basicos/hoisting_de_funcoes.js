
exibirTexto(); // Fase de execução, declaração da função

function exibirTexto() { // Fase de criação, a função é armazenada na memória
    console.log("Fase de execução, declaração da função"); // Fase de execução, a função é chamada
}

exibirTexto(); // Fase de execução, a função é chamada

// exibirOutroTexto();

var exibirOutroTexto = function() { // Fase de criação, a variável é armazenada na memória, mas não a função
    console.log("Fase de execução, expressão de função"); // Fase de execução, a variável é atribuída à função, mas a função não é chamada
}

exibirOutroTexto(); // Fase de execução, a variável é atribuída à função, mas a função não é chamada, pois a variável ainda não foi atribuída à função no momento da chamada