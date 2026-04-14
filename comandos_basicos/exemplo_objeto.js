var carro = {
    nome: 'Fusca',
    marca: 'VW',
    mostrarDados: function(cor, ano) {
        console.log(this.nome, ano, this.marca, cor);
    }
}

carro.mostrarDados('azul', 1980);

// Recebemos um objeto como valor, e podemos acessar suas propriedades e métodos usando a palavra-chave this dentro do método mostrarDados. O resultado será: "Fusca 1980 VW azul".