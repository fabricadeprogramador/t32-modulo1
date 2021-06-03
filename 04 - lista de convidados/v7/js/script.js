class ListaConvidadoController {
  constructor() {
    this.idEdicao = null
    this.convidados = []
  }

  lerDados() {
    let convidado = {}

    convidado.nome = document.getElementById("nomeConvidado").value
    convidado.idade = document.getElementById("idadeConvidado").value
    convidado.sexo = document.getElementById("sexoConvidado").value

    return convidado
  }

  buscarConvidadosAPI() {
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        this.convidados = JSON.parse(xhttp.responseText)
        this.gerarTabela()
      }
    }
    xhttp.open("GET", "http://localhost:3000/convidados", true)
    xhttp.send()
  }

  inserirConvidadoAPI() {
    let conv = this.lerDados()
    conv.idade = parseInt(conv.idade)
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        // this.convidados = JSON.parse(xhttp.responseText)
        this.buscarConvidadosAPI()
      }
    }
    xhttp.open("POST", "http://localhost:3000/convidados", true)
    xhttp.setRequestHeader("Content-Type", "application/json")
    xhttp.send(JSON.stringify(conv))
  }

  salvar() {
    let convidadoNovo = this.lerDados()

    if (this.validar(convidadoNovo)) {
      if (this.idEdicao == null) {
        //ADIÇÃO
        this.convidados.push(convidadoNovo)
      } else {
        //EDIÇÃO

        document.getElementById("colunaNome-" + this.idEdicao).innerText =
          convidadoNovo.nome
        document.getElementById("colunaIdade-" + this.idEdicao).innerText =
          convidadoNovo.idade
        document.getElementById("colunaSexo-" + this.idEdicao).innerText =
          convidadoNovo.sexo
      }
      this.cancelar()
      this.gerarTabela()
    }
  }

  gerarTabela() {
    document.getElementById("tabelaCorpo").innerHTML = ""

    for (let i = 0; i < this.convidados.length; i++) {
      let convidado = this.convidados[i]
      this.inserirLinha(convidado)
    }
  }

  inserirLinha(convidado) {
    //Busca o elemento tabela
    let tabela = document.getElementById("tabelaCorpo")
    //Insere uma nova linha na tabela
    let linha = tabela.insertRow()

    //Insere as colunas na linha
    let colunaNome = linha.insertCell()
    let colunaIdade = linha.insertCell()
    let colunaSexo = linha.insertCell()
    let colunaRemover = linha.insertCell()
    let colunaEditar = linha.insertCell()

    //Seta os valores nas colunas
    colunaNome.innerText = convidado.nome
    colunaIdade.innerText = convidado.idade
    colunaSexo.innerText = convidado.sexo
    //Cria os elementos de imagem
    let imagemRemover = document.createElement("img")
    let imagemEditar = document.createElement("img")
    //Setar as propriedades das imagens
    imagemRemover.src = "img/delete.svg"
    imagemEditar.src = "img/edit.svg"
    imagemRemover.setAttribute("onclick", "convidadoController.remover()")
    imagemEditar.setAttribute("onclick", "convidadoController.editar()")
    //Adicionando as imagens como filhas das celulas referentes
    colunaRemover.appendChild(imagemRemover)
    colunaEditar.appendChild(imagemEditar)
  }

  remover(itemId) {
    if (confirm("Tem certeza que deseja remover este elemento?")) {
      let id = "linha-" + itemId

      document.getElementById(id).remove()
    }
  }

  editar(itemId) {
    //Salva o número referente ao id do elemento clicado pra edição
    this.idEdicao = itemId

    //Setar os valores nos inputs
    document.getElementById("nomeConvidado").value = document.getElementById(
      "colunaNome-" + itemId
    ).innerText
    document.getElementById("idadeConvidado").value = document.getElementById(
      "colunaIdade-" + itemId
    ).innerText
    document.getElementById("sexoConvidado").value = document.getElementById(
      "colunaSexo-" + itemId
    ).innerText
  }

  validar(convidado) {
    let mensagemValidacao = ""

    if (convidado.nome == "") {
      mensagemValidacao += "Campo nome é obrigatório! \n"
    }

    if (convidado.idade == "") {
      mensagemValidacao += "Campo idade é obrigatório! \n"
    }

    if (convidado.sexo == "") {
      mensagemValidacao += "Campo sexo é obrigatório! \n"
    }

    if (mensagemValidacao != "") {
      alert(mensagemValidacao)
      return false
    }

    return true
  }

  cancelar() {
    document.getElementById("nomeConvidado").value = ""
    document.getElementById("idadeConvidado").value = ""
    document.getElementById("sexoConvidado").value = ""
    this.idEdicao = null
  }
}

let convidadoController = new ListaConvidadoController()
