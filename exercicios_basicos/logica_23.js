/* Faça um algoritmo que efetue o cálculo do salário líquido de um professor. As informações fornecidas serão: 
valor da hora aula, 
número de aulas lecionadas no mês e percentual de desconto do INSS. Imprima na tela o salário líquido final. */

let horaAula = 20
let aulasLecionadas = 120
let descontoINSS = 0.11

let salarioBruto = horaAula * aulasLecionadas
let valorDescontoINSS = salarioBruto * descontoINSS
let salarioLiquido = salarioBruto - valorDescontoINSS

console.log("O valor do salário líquido do professor é: R$ " + salarioLiquido.toFixed(2));