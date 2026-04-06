var flores = ['rosa', 'azul', 'amarela', 'vermelha', 'branca', 'amarela', 'roxa'];
var i = 0;
var numeroDeFlores = 0;
for (var i = 0; i < flores.length; i++) {
    if (flores[i] == 'amarela') {
        continue;
    }
    numeroDeFlores++;
}
console.log('Número de flores: ' + numeroDeFlores);

/* continue ajuda a manipular o fluxo do laço de repetição encerrando a verificação atual e 
passando para a próxima verificação */