const calcular = document.getElementById('calcular');


function imc() {
    const nome = document.getElementById('nome').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && peso !== '' && altura !== '') {
       const valorIMC = (peso / (altura * altura)).toFixed(2);

       let classificacao = '';

       if (valorIMC < 18.5) {
           classificacao = 'Abaixo do peso';
       } else if (valorIMC >= 18.5 && valorIMC < 25) {
           classificacao = 'Peso normal';
       } else if (valorIMC >= 25 && valorIMC < 30) {
           classificacao = 'Sobrepeso';
       } else {
           classificacao = 'Obesidade';
       }

       resultado.textContent = `${nome}, seu IMC é ${valorIMC} (${classificacao})`;
    } else {
        resultado.textContent = 'Preencha todos os campos!';
    }
}

calcular.addEventListener('click', imc);