function abrirMensagens() {
  document.getElementById('div-msg').classList.add('show')
}

function fecharMensagens() {
  document.getElementById('div-msg').classList.remove('show')
}

function validar() {
  //Variável que vai acumular as mensagens de erro
  var bufferMensagem = ''

  //Captura dos valores
  var nome = document.getElementById('nome').value
  var email = document.getElementById('email').value
  var sexoMasculino = document.getElementById('masc').checked
  var sexoFeminino = document.getElementById('fem').checked
  var qtdCursosSelecionados = document.querySelectorAll(
    '[type=checkbox]:checked'
  ).length
  var opcaoSelectEstados = document.getElementById('estado').value
  var foto = document.getElementById('foto').value
  var dataNasc = document.getElementById('datanasc').value

  //Validações
  if (nome == '') {
    bufferMensagem = bufferMensagem + '\nO campo nome é obrigatório'
  }

  if (email == '') {
    bufferMensagem = bufferMensagem + '\nO campo e-mail é obrigatório'
  }

  if (!sexoMasculino && !sexoFeminino) {
    bufferMensagem = bufferMensagem + '\nPreencha o campo sexo'
  }

  if (qtdCursosSelecionados == 0) {
    bufferMensagem =
      bufferMensagem + '\nSelecione pelo menos um curso de interesse'
  }

  if (opcaoSelectEstados == '') {
    bufferMensagem = bufferMensagem + '\nSelecione o estado'
  }

  if (foto == '') {
    bufferMensagem = bufferMensagem + '\nSelecione uma foto'
  }

  if (dataNasc == '') {
    bufferMensagem =
      bufferMensagem + '\nO campo data de nascimento é obrigatório'
  }

  if (bufferMensagem == '') {
    document.getElementById('textoMensagem').textContent =
      'Cliente salvo com sucesso!'
    document.getElementById('div-msg').classList.add('show')
  } else {
    document.getElementById('textoMensagem').innerText = bufferMensagem
    document.getElementById('div-msg').classList.add('show')
  }
}
