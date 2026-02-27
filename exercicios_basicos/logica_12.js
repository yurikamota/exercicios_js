// 12 - Faça um algoritmo que leia o valor de um produto e determine o valor que deve ser pago, conforme a escolha da forma de pagamento pelo comprador e imprima na tela o valor final do produto a ser pago. Utilize os códigos da tabela de condições de pagamento para efetuar o cálculo adequado.

let valor = parseFloat(prompt("Digite o valor do produto: "));
let metodoDePagamento = parseFloat(prompt("Escolha método de pagamento: digite: 1 para A vista ou Pix, 2 para Cartão de Crédito, 3 para Parcela em 2 vezes, 4 para Parcela em 3 vezes ou mais."));

switch (metodoDePagamento) {
    case 1:
        console.log("Valor final com desconto de 15%: R$", (valor - (valor * (15/100))).toFixed(2));
        break;
    case 2:
        console.log("Valor final com desconto de 10%: R$", (valor - (valor * (10/100))).toFixed(2));
        break;
    case 3:
        console.log("Valor dividido em 2 vezes de: R$", (valor/2).toFixed(2));
        break;
    case 4:
        let parcelas = parseInt(prompt("Digite o número de parcelas (3 ou mais): "));
        let valorComJuros = valor * 1.10;
        if (parcelas >= 3) {
            console.log("Valor dividido em", parcelas, "vezes de: R$", (valorComJuros/parcelas).toFixed(2));
        } else {
            console.log("Número de parcelas inválido. Digite 3 ou mais.");
        }
        break;
    default:
        console.log("Opção de pagamento inválida. Por favor, escolha uma opção válida.");
        break;
}

/*
 Tabela de Código de Condições de Pagamento

 

 1 - À Vista em Dinheiro ou Pix, recebe 15% de desconto

 2 - À Vista no cartão de crédito, recebe 10% de desconto

 3 - Parcelado no cartão em duas vezes, preço normal do produto sem juros

 4 - Parcelado no cartão em três vezes ou mais, preço normal do produto mais juros de 10%
 */