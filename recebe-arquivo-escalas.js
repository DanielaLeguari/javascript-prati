function converter(numero) {
  let escala = 1;
  let formato = "B";
  while (true) {
    if (numero >= 1 && numero <= 1023) {
      break;
    }
    numero = numero / 1024;
    escala++;
  }

  if (escala == 2) {
    formato = "KB";
  } else if (escala == 3) {
    formato = "MB";
  } else if (escala == 4) {
    formato = "GB";
  } else if (escala == 5) {
    formato = "TB";
  } else if (escala == 6) {
    formato = "PB";
  } else if (escala == 7) {
    formato = "EB";
  } else if (escala == 8) {
    formato = "ZB";
  } else if (escala == 9) {
    formato = "YB";
  }
  return `${numero.toFixed(2)} ${formato}`;
}

function recebeArquivo(numero) {
  let resultado = converter(numero); //numero / 1024 / 1024;

  return resultado; // fixando duas casas decimais
}

//console.log(recebeArquivo(2000000000000000000000000)); // 9.54 MB
console.log(recebeArquivo(555));

/*
    1 byte é a menor unidade aceita em numero
    bytes: 1 .. 1023 exibir bytes  
    kylobytes: 1 KB (1024 B) .. 1023 KB --- bytes / 1024 = kb
    
     3 mb: 1 Mb .. 1023 mb --- kb / 1024 = mb
    gb: 1 gb .. 1023 gb --- mb / 1024 = gb
    tera: 1 tb .. 1023 tb --- gb / 1024 = tb
    peta: 1 pb .. 1023 pb --- tb / 1024 = pb
    exa: 1 eb .. 1023 eb --- pb / 1024 = eb
    zetta: 1 zb .. 1023 zb --- eb / 1024 = zb
    yotta: 1 yb .. 1023 yn --- zb / 1024 = yn

    
    */
