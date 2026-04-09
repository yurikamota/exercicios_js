const nome = document.getElementById('nome');
const peso = document.getElementById('peso');
const altura = document.getElementById('altura');
const calcular = document.getElementById('calcular');
const resultado = document.getElementById('resultado');

function imc() {
    alert ('teste click');
}

calcular.addEventListener('click', imc);