var arrJogadores = ['Ricardo', 'Monica', 'Leonardo'];
var arrAnoNascimento = newArray(1990, 1985, 1992);
var arrPontos = [45, 117, 78];
arrPontos[1] = 71; // Aqui estamos atualizando o valor do segundo elemento 'Monica' do array arrPontos para 71. O índice 1 corresponde ao segundo elemento, já que os índices começam em 0.
console.log(arrJogadores); // Imprime o array de jogadores no console.
console.log(arrJogadores[1] + ' tem ' + arrPontos[1] + ' pontos.'); // Aqui estamos acessando o segundo elemento do array arrJogadores (que é 'Monica') e o segundo elemento do array arrPontos (que agora é 71) para criar uma mensagem que indica quantos pontos Monica tem. O resultado será: "Monica tem 71 pontos."

// Outro exemplo:
// newArray(nomejogador, anonascimento, pontos)
var arrRicardo = ['Ricardo', 1990, 45];
var arrMonica = ['Monica', 1985, 71];
var arrLeonardo = ['Leonardo', 1992, 78];
var arrJogadores = [arrRicardo, arrMonica, arrLeonardo];
console.log(arrJogadores); // Imprime o array de jogadores, onde cada jogador é representado por um array com seu nome, ano de nascimento e pontos. O resultado será: [["Ricardo", 1990, 45], ["Monica", 1985, 71], ["Leonardo", 1992, 78]].

// Função push para adicionar um novo elemento ao array:

var arrPrato = ['Arroz', 'Feijão', 'Carne'];
arrPrato.push('Salada'); // Aqui estamos usando o método push para adicionar o elemento 'Salada' ao final do array arrPrato. O array agora contém ['Arroz', 'Feijão', 'Carne', 'Salada'].
console.log(arrPrato); // Imprime o array atualizado de pratos no console. O resultado será: ['Arroz', 'Feijão', 'Carne', 'Salada'].

// Unshift adiciona um elemento no início do array:

var arrEmenta = ['Matematica', 'Português', 'História'];
arrEmenta.unshift('Geografia'); // Aqui estamos usando o método unshift para adicionar o elemento 'Geografia' no início do array arrEmenta. O array agora contém ['Geografia', 'Matematica', 'Português', 'História'].
console.log(arrEmenta); // Imprime o array atualizado de ementa no console. O resultado será: ['Geografia', 'Matematica', 'Português', 'História'].