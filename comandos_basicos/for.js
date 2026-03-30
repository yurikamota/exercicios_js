// for (contador; condição; incremento) 
for (var i = 0; i < 10; i++) {
    console.log(i);
}

// O código acima é um exemplo de um loop for, onde a variável i é inicializada com 0, 
// a condição é que i seja menor que 10, e o incremento é feito com i++. 
// A cada iteração do loop, o valor de i é impresso no console. 
// O loop continuará executando até que a condição seja falsa, ou seja, quando i atingir 10.

var nomes = ['Joao', 'Maria', 'Pedro', 'Ana'];

for (var i = nomes.length - 1; i >= 0; i--) {
    console.log(nomes[i]);
}

// O código acima é um exemplo de um loop for que percorre um array de nomes de trás para frente. 
// A variável i é inicializada com o índice do último elemento do array (nomes.length - 1), 
// a condição é que i seja maior ou igual a 0, e o decremento é feito com i--. 
// A cada iteração do loop, o nome correspondente ao índice i é impresso no console. 
// O loop continuará executando até que i seja menor que 0, ou seja, quando todos os elementos do array tiverem sido percorridos.