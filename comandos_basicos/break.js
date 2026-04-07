var animaisMarinhos = ['golfinho', 'baleia', 'tubarão', 'polvo', 'estrela-do-mar'];
for (var i = 0; i < animaisMarinhos.length; i++) {
    if (animaisMarinhos[i] == 'tubarão') {
        console.log(animaisMarinhos[i] + ' encontrado, interrompendo o loop.');
        break;
    } else {
        console.log('Procurar animal marinho.');
    }
}

// break é usado para interromper a execução de um loop quando uma condição específica é atendida.
// No exemplo acima, o loop for percorre o array de animais marinhos e verifica se o animal atual é um tubarão. 
// Se for, uma mensagem é impressa indicando que o tubarão foi encontrado e o loop é interrompido com a instrução break. 
// Caso contrário, uma mensagem é impressa indicando que a busca por um animal marinho continua. 
// O loop continuará executando até que o tubarão seja encontrado ou até que todos os elementos do array tenham sido verificados.