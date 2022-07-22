
function contarCaracteres(valor) {
  let LetraMaiuscula = 0;
  let letraMinuscula = 0;
  let numero = 0;
  let caractereEspecial = 0;
  for (let i = 0; i < valor.length; i++) {
    if (valor[i] >= "A" && valor[i] <= "Z") {
      LetraMaiuscula++;
    } else if (valor[i] >= "a" && valor[i] <= "z") {
      letraMinuscula++;
    } else if (valor[i] >= "0" && valor[i] <= "9") {
      numero++;
    } else {
      caractereEspecial++;
      console.log(valor[i]);
    }
  }
  return {
    letraMinuscula: letraMinuscula,
    LetraMaiuscula: LetraMaiuscula,
    numero: numero,
    caractereEspecial: caractereEspecial,
  };
}

//let senha = contarCaracteres("Cas2019#");
/*console.log(senha.LetraMaiuscula);
console.log(senha.letraMinuscula);
console.log(senha.numero);
console.log(senha.caractereEspecial);*/

function validaComplexidade(valor) {
  if (valor.length < 8 || valor.length > 32) {
    //console.log("val tamanho");
    return 0;
  }
  let senha = contarCaracteres(valor);
  if (senha.caractereEspecial > 0) {
    //console.log("val especial");
    return 0;
  }
  if (senha.LetraMaiuscula < 1) {
    //console.log("val maiuscula");
    return 0;
  }
  if (senha.letraMinuscula < 1) {
    //console.log("val minuscula");
    return 0;
  }
  if (senha.numero < 1) {
    //console.log("val numero");
    return 0;
  }
  return 1;
}

console.log(validaComplexidade("Crescer10"));
console.log(validaComplexidade("a1234567"));

