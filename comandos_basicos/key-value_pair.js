var objetoCarro = {
    modelo: '147',
    numeroVidros: 4,
    marca: 'Fiat',
    numeroPortas: 2
}

var objetoCasa = new Object();
objetoCasa.numeroComodos = 5;
objetoCasa.valorImovel = 523000.320;
objetoCasa['aluguel'] = false;
objetoCasa['venda'] = true;

objetoCarro.numeroPortas = 4; // Aqui estamos atualizando o valor da propriedade numeroPortas do objetoCarro para 4. O objeto agora tem a propriedade numeroPortas com o valor 4.
var umIdentificadorDaCasa = 'valorImovel';

console.log(objetoCarro); // Imprime o objetoCarro no console. O resultado será: {modelo: '147', numeroVidros: 4, marca: 'Fiat', numeroPortas: 4}.
console.log(objetoCarro.modelo); // Aqui estamos acessando a propriedade modelo do objetoCarro para imprimir seu valor no console. O resultado será: '147'.
console.log(objetoCasa['numeroComodos']); // Aqui estamos acessando a propriedade numeroComodos do objetoCasa usando a notação de colchetes para imprimir seu valor no console. O resultado será: 5.
console.log(objetoCasa[umIdentificadorDaCasa]); // Aqui estamos usando a variável umIdentificadorDaCasa, que contém a string 'valorImovel', para acessar a propriedade valorImovel do objetoCasa e imprimir seu valor no console. O resultado será: 523000.32.

// A key (chave) é a propriedade e value (valor) é o valor, característica, quantidade e etc; da propriedade ex: cor - azul, marca - fiat.

// Se chama key-value porque o objeto funciona como um dicionário. Se usa a key para encontrar o value:
// console.log(objetoCarro.modelo) estamos pedindo para que o objetoCarro nos dê o value da key chamada modelo. 