var numeroPassageiros = 23;

if (numeroPassageiros === 0 ){
    console.log("O transporte está vazio.");
} else if (numeroPassageiros > 0 && numeroPassageiros < 50) {
    console.log("O transporte tem passageiros");
} else {
    console.log("O transporte está lotado");
}

// O else if nesse caso foi usado como condição intermediária porque existem mais de duas possibilidades: o transporte pode estar vazio, pode ter passageiros, ou pode estar lotado. O else if permite verificar uma condição adicional (numeroPassageiros > 0 && numeroPassageiros < 50) para determinar se o transporte tem passageiros, enquanto o else final cobre a situação em que o transporte está lotado (numeroPassageiros >= 50).
// Se fossem só duas possibilidades poderia ser:
// if (numeroPassageiros === 0) {
//   console.log("Vazio");
//} else {
//   console.log("Tem passageiros");}

// else if só é testado se o anterior for falso
// se há condição necessita de if
// a condição fica entre parênteses

