var nomes = ['Soluço', 'Astrid', 'Banguela', 'Meatlug', 'Bocão'];
var nomePesquisado = null;
var i = 0;
while (nomePesquisado== null && i < nomes.length) {
    if (nomes[i] == 'Banguela') {
        nomePesquisado = nomes[i];
} else {
    console.log(nomes[i] + ' não é o nome procurado.');
}
i++;
}
console.log('Nome encontrado: ' + nomePesquisado);

// O código acima é um exemplo de um loop while que percorre um array de nomes em busca de um nome específico, "Banguela".
// A variável nomePesquisado é inicialmente definida como null, e a variável i é usada como índice para percorrer o array.
// O loop while continua executando enquanto nomePesquisado for null e i for menor que o comprimento do array de nomes.
// Dentro do loop, há uma condição if que verifica se o nome atual (nomes[i]) é igual a "Banguela". 
// Se for, nomePesquisado é atualizado com o nome encontrado. Caso contrário, uma mensagem é impressa indicando que o nome atual não é o procurado.
// O índice i é incrementado a cada iteração para avançar para o próximo nome no array.
// Após o loop, o nome encontrado é impresso no console.
