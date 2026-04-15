var carro = {
    nome: 'Fusca',
    marca: 'VW',
    mostrarDados: function(cor, ano) {
        console.log(this.nome, ano, this.marca, cor);
    }
}

carro.mostrarDados('azul', 1980);

// Recebemos um objeto como valor, e podemos acessar suas propriedades e métodos usando a palavra-chave this dentro do método mostrarDados. O resultado será: "Fusca 1980 VW azul".

// Call
carro.mostrarDados.call({
    nome:'Opala',
    marca: 'Chevrolet'
}, 'Bordo', 1972);

// Bind

var brasiliaAmarela = carro.mostrarDados.bind({
    nome: 'Brasília',
    marca: 'VW'
}, 'Amarelo');

brasiliaAmarela(1974);
brasiliaAmarela(1975);
brasiliaAmarela(1982);

// O método bind retorna uma nova função com o contexto (this) definido para o objeto passado como argumento. No exemplo acima, criamos a função brasiliaAmarela que tem o contexto definido para um objeto com nome "Brasília" e marca "VW". Quando chamamos brasiliaAmarela(1974), ela exibe "Brasília 1974 VW Amarelo". As chamadas subsequentes exibem os mesmos dados, mas com anos diferentes.

// Apply

carro.mostrarDados.apply({
    nome: 'Chevette',
    marca: 'GM'
}, ['Vermelho', 1985]);

// O método apply é semelhante ao call, mas em vez de passar os argumentos individualmente, passamos um array de argumentos. No exemplo acima, o contexto é definido para um objeto com nome "Chevette" e marca "GM", e os argumentos são passados como um array. O resultado será: "Chevette 1985 GM Vermelho".