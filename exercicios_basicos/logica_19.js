// 19 - Faça um algoritmo que imprima na tela a tabuada de 1 até 10.
for (let i = 1; i <= 10; i++) {
    console.log("Tabuada do " + i + ":");
    for (let j = 1; j <= 10; j++) {
        console.log(i + "x" + j + " = " + (i * j));
    }
}

// criamos um for dentro de um for
// para cada valor de = i (let i = 1; i <= 10), o segundo for (com j) é executado, imprimindo a tabuada correspondente a cada número de 1 a 10. for (let j = 1; j <= 10; j++) {
//      console.log(i + "x" + j + " = " + (i * j));
