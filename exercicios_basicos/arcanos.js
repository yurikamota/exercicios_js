let arcanoDoDia = ['O Mago', 'A Sacerdotisa', 'A Imperatriz', 'O Imperador', 'O Hierofante', 'Os Amantes', 'O Carro', 'A Força', 'O Eremita', 'A Roda da Fortuna', 'A Justiça', 'O Enforcado', 'A Morte', 'A Temperança', 'O Diabo', 'A Torre', 'A Estrela', 'A Lua', 'O Sol', 'O Julgamento', 'O Mundo'];

let arcanoSorteado = arcanoDoDia[Math.floor(Math.random() * arcanoDoDia.length)];

console.log("O seu arcano do dia é:", arcanoSorteado);

// adicionando mensagens para cada arcano, por exemplo:
switch (arcanoSorteado) {
    case 'O Mago':
        console.log("Hoje é um dia de criatividade e novas oportunidades. Aproveite para iniciar projetos e usar sua habilidade de manifestar seus desejos.");
        break;
    case 'A Sacerdotisa':
        console.log("Hoje é um dia para confiar na sua intuição e buscar conhecimento interior. Ouça sua voz interior e siga seu coração.");
        break;
    case 'A Imperatriz':
        console.log("Hoje é um dia para se conectar com a natureza e cultivar a beleza ao seu redor. Aproveite para cuidar de si mesmo e dos outros.");
        break;

    default:
        console.log("Tenha um ótimo dia, independentemente do arcano sorteado!");
}