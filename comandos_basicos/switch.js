var nome = "Michele";
var emprego = "desenvolvedor";

switch (emprego) {
    case "policial":
        console.log(nome + " é uma policial.");
        break;
    case "cozinheiro":
        console.log(nome + " é uma cozinheira.");
        break;
    case "desenvolvedor":
        console.log(nome + " é uma desenvolvedora.");
        break;
    case "lutador":
        console.log(nome + " é uma lutadora.");
        break;
    default:
        console.log("Emprego desconhecido.");
}


// O comando switch, é uma meneira mais elegante de criar diversas decisões baseadas em um mesmo valor, evitando a necessidade de criar diversos ifs aninhados. Ele compara o valor da variável (neste caso, "emprego") com os casos definidos (case) e executa o bloco de código correspondente ao caso que corresponde ao valor da variável.

// O comando case orienta as decisões lógicas assim como if. 

// O comando break é usado para interromper a execução do switch após encontrar um caso correspondente. Uso obrigatório dentro de case.

// O comando default pode ser comparado ao else, caso nenhum case seja compatível, o default será executado. O uso do default é opcional, mas é uma boa prática incluí-lo para lidar com casos inesperados.