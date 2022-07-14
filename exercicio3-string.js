function reserveString(nome) {
    let nomeArray = nome.split("");
    return nomeArray.reverse("").join("");

}
// -----------------------------------------

function retornaPalindromo(nome) {
    let nomeInicial = nome.toUpperCase().replaceAll(" ", ""),
        nomeFinal = nomeInicial.split("").reverse("").join("");
    if (nomeInicial == nomeFinal) {
        return `true`;
    } else {
        return `false`;
    }

}

// ------------------------------------------------
function contaCaracteres(nome) {
    let contaLetra = 0,
        nomeArray = nome.split("");
    for (let i = 0; i < nomeArray.length; i++) {
        contaLetra++;
        //console.log(contaLetra);
    }
    return {
        totalLetras: contaLetra
    };

}

// --------------------------------------------------------

function contaVogalConsoante(nome) {
    let nomeArray = nome.split(""),
        contaVogal = 0,
        contaConsoante = 0;
     for (let i = 0; i < nomeArray.length; i++) {
        if((nomeArray[i] == "a") || (nomeArray[i] == "e") || (nomeArray[i] == "i") || (nomeArray[i] == "o") || (nomeArray[i] == "u")){
            contaVogal++;
        } else {
            contaConsoante++;
        }
     }
     return {
            totalVogal : contaVogal,
            totalConsoante : contaConsoante
     };
    
}

//console.log(retornaPalindromo("Ama ama aMa"));

//let objeto = contaCaracteres("Daniela");
//console.log((`${objeto.totalLetras} Letras`));

let objeto = (contaVogalConsoante("daniela"));
console.log((`${objeto.totalVogal} vogais e ${objeto.totalConsoante} consoantes.`))