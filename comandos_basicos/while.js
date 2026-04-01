var nomes = ['Soluço', 'Astrid', 'Banguela', 'Meatlug', 'Bocão'];
var nomePesquisado = null;
while (nomePsquisado== null && i < nomes.length) {
    if (nomes[i] == 'Banguela') {
        nomePesquisado = nomes[i];
} else {
    console.log(nomes[i] + ' não é o nome procurado.');
}
i++;

console.log('Nome encontrado: ' + nomePesquisado);}
