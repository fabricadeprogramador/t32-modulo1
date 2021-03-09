function abrirMensagens() {
  document.getElementById('div-msg').classList.add('show')
}

function fecharMensagens() {
  document.getElementById('div-msg').classList.remove('show')
}

function validar() {
  var nome = document.getElementById('nome').value

  if (nome == '') {
    console.log('Faltando preencher o nome')
  }
}
