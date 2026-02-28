function verificarIdade(nomePessoa, anoDeNascimento) {
    var idade = new Date().getFullYear() - anoDeNascimento;
    if (idade >= 18) {
       return nomePessoa + " é maior de idade.";
    } else {
         return nomePessoa + " é menor de idade.";
    }
}

var nome = "Joana";
var nascimento = "2008"
console.log(verificarIdade(nome, nascimento));

console.log(verificarIdade("Carlos", 1990));

nome = "John";
nascimento = 1978;
var texto = verificarIdade(nome, nascimento);
console.log(texto);

// Outra forma de colocar mais simples seria:
/* console.log(verificarIdade("Joana", 2009));

console.log(verificarIdade("Carlos", 1990));


console.log(verificarIdade("John", 1978));
*/