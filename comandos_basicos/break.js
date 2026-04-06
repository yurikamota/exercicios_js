var animaisMarinhos = ['golfinho', 'baleia', 'tubarão', 'polvo', 'estrela-do-mar'];
for (var i = 0; i < animaisMarinhos.length; i++) {
    if (animaisMarinhos[i] == 'tubarão') {
        console.log(animaisMarinhos[i] + ' encontrado, interrompendo o loop.');
        break;
    } else {
        console.log('Procurar animal marinho.');
    }
}