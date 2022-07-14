function validaOperacao(n1, n2, operacao) {
    if (operacao == "+") {
        return n1 + n2;
    } else if (operacao == "-") {
        return n1 - n2;
    } else if (operacao == "*") {
        return n1 * n2;
    } else if (operacao == "/") {
        return n1 / n2;
    } else {
        return `Você digitou'${operacao}'. Operação inválida!`;
    }

}

function validaNaN(n1, n2) {
    if (isNaN(n1) || (isNaN(n2))) {
        return true;
    } else {
        return false;
    }
}

function converteNumero(n1, n2, operacao){
    if(validaNaN(n1, n2) == true){
        return `Você digitou um caracter inválido para o calculo.`;
    } else {
        return validaOperacao(Number(n1), Number(n2), operacao);
    }
}

function calculaOperacao(n1, n2, operacao){
    if (((n1 > 0 &&  n1 <= 10)) || ((n1 >= 20 && n1 <=30 ))){
        if(((n2 > 0 && n2 <= 10)) || ((n2 >= 20 && n2 <= 30))){
            return converteNumero(n1, n2, operacao);
        }
    }
    return `Você digitou números fora do intervalo!`
}



//console.log(calculaOperacao(30, "20", "+"));

// -------------------------------------------------------------------------------------------

function ePrimo(numero){
    let i = 2,
        contador = 0;

    while(i < numero){
        if (numero % i === 0){
            contador++;
        }
        i++;
    }

    if ((contador > 0) || (numero == 1) || (numero == 0)){
        return false;
    } else {
        return true;
    }
}

console.log(ePrimo(2));