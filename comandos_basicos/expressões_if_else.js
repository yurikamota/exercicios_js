var nome = "Yurika";
var idade = 23;
var estarSolteiro = true;

// if (estarSolteiro) { // retorno da decisão é verdadeiro
if (estarSolteiro === true) { // comparação explícita, retorno da decisão é verdadeiro
    console.log(nome + " está solteira!");
} else { // retorno da decisão é falso
    console.log(nome + " está casada!");
}

// "O que se encontra entre parênteses após o if nós chamamos de decisão lógica, pois será baseado nesta decisão que iremos controlar qual expressão será logicamente executada, fazendo assim o controle da estrututa." Trecho do livro "Javascript Básico ao Avançado" página 27. 