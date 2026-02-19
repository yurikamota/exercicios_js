const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o primeiro número: ", function(num1) {
    rl.question("Digite o segundo número: ", function(num2) {

        let numero1 = Number(num1);
        let numero2 = Number(num2);

        if (isNaN(numero1) || isNaN(numero2)) {
            console.log("Por favor, digite números válidos.");
        } else {
            if (numero1 > numero2) {
                console.log(`O número ${numero1} é maior que ${numero2}.`);
            } else if (numero1 < numero2) {
                console.log(`O número ${numero2} é maior que ${numero1}.`);
            } else {
                console.log("Os dois números são iguais.");
            }
        }

        rl.close();

    });

});

// no terminal escreva "node comparar.js" para executar o programa.