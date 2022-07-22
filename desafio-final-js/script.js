let listaInformacoes = []; // variável global

function recebeDados(nome, telefone, dataNascimento, notaFinalCurso) {
  listaInformacoes.push({
    nome: nome,
    telefone: telefone,
    dataNascimento: dataNascimento,
    notaFinalCurso: notaFinalCurso,
  });
}

function cadastrarFront() {
  let nome = document.getElementById("inputNome").value;
  let fone = document.getElementById("inputFone").value;
  let nascimento = document.getElementById("inputNascimento").value;
  let nota = document.getElementById("inputNota").value;

  recebeDados(nome, fone, nascimento, nota);

  document.getElementById("mensagem").innerHTML =
    "<b>Aluno cadastrado com sucesso!</b>";

  limparCampos();

  let armazenaHTML = retornaDados();
  document.getElementById("lista").innerHTML = armazenaHTML;
}

function limparCampos() {
  document.getElementById("inputNome").value = "";
  document.getElementById("inputFone").value = "";
  document.getElementById("inputNascimento").value = "";
  document.getElementById("inputNota").value = "";
}

function retornaDados() {
  let lista = []; //para cada linha de aluno, será uma linha html
  lista.push("<table>");
  lista.push(
    "<td>Nome</td><td>Telefone</td><td>Data Nascimento</td><td>Nota Final</td>"
  );
  for (let i = 0; i < listaInformacoes.length; i++) {
    let linha = `<tr><td> ${listaInformacoes[i].nome}</td>`;
    linha += `<td> ${listaInformacoes[i].telefone}</td>`;
    linha += `<td> ${listaInformacoes[i].dataNascimento}</td>`;
    linha += `<td> ${listaInformacoes[i].notaFinalCurso}</td>`;
    linha += `</tr>`;
    lista.push(linha);
  }
  lista.push("</table>");
  return lista.join("");
}

// let aluno = console.log("Daniela", "46567798", "xxxxxxxxxx", 56);
