var carro = {
    extras: ['ar condicionado', 'direção hidráulica', 'vidros elétricos'],
    velocidade: 0,
    faroisLigados: false,
    ligarFarois: function() {
        this.faroisLigados = true;
    },
    acelerar: function(velocidade) {
        this.velocidade += velocidade;
    },
    frear: function() {
        this.velocidade = 0;
    }
}
    carro.ligarFarois();
    console.log('Farois ligados: ' + carro.faroisLigados);

    carro.acelerar(60);
    console.log('Velocidade atual: ' + carro.velocidade + ' km/h');

    carro.frear();
    console.log('Velocidade após frear: ' + carro.velocidade + ' km/h');

// O código acima define um objeto chamado "carro" com propriedades e métodos relacionados a um carro.
// A notação é basicamente as caracteristicas do objeto dentro da variavel. 
// No final do código usamos um conceito chamado método que são ações que o objeto pode realizar, como ligar os faróis, acelerar e frear.
// Utilizamos o ponto (.) para acessar as propriedades e métodos do objeto.