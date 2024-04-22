
function calcular(){
    var numeroA = document.getElementById('numeroA');
    var numeroB = document.getElementById('numeroB');
    var operacao = document.getElementById('operacao');
    var final = document.getElementById('resultado');
    var resultado = 0;
    var numeroUm = Number(numeroA.value);
    var numeroDois = Number(numeroB.value);
    var selecionada = (operacao.value);
    switch (selecionada) {
        case 'soma':
            resultado = numeroUm + numeroDois;
            final.innerHTML = resultado;
            break;
        case 'subtracao':
            resultado = numeroUm - numeroDois;
            final.innerHTML = resultado;
            break;
        case 'vezes':
            resultado = numeroUm * numeroDois;
            final.innerHTML = resultado;
            break;
        case 'divisao':
            resultado = numeroUm / numeroDois;
            final.innerHTML = resultado;
            break;
        default:
            resultado = 'Operação Inválida';
            break;
    }
}