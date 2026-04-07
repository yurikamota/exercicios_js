let arcanoDoDia = ['O Mago', 'A Sacerdotisa', 'A Imperatriz', 'O Imperador', 'O Hierofante', 'Os Amantes', 'O Carro', 'A Força', 'O Eremita', 'A Roda da Fortuna', 'A Justiça', 'O Enforcado', 'A Morte', 'A Temperança', 'O Diabo', 'A Torre', 'A Estrela', 'A Lua', 'O Sol', 'O Julgamento', 'O Mundo'];

let arcanoSorteado = arcanoDoDia[Math.floor(Math.random() * arcanoDoDia.length)];

console.log("O seu arcano do dia é:", arcanoSorteado);