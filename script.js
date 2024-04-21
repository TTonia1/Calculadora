function calcular(){
    var numeroA = document.getElementById('numeroA');
    var numeroB = document.getElementById('numeroB');
    var operacao = document.getElementById('operacao');
    var resultado = document.getElementById('resultado');
    if(operacao =='soma'){
        var r = numeroA+numeroB;
    }
    if (operacao == 'subtracao'){
        var r = numeroA+numeroB;
    }
    if (operacao == 'multiplicacao'){
        var r = numeroA*numeroB;
    }
    if (operacao == 'divisao'){
        var r = numeroA/numeroB;
    }
    resultado.innerHTML = `${r}`
}