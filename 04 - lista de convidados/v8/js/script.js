class ListaConvidadoController {
  constructor() {
    this.idEdicao = null
    this.convidados = []
  }

  /**
   * Métodos de consumo da API
   */

  async buscarConvidadosAPI() {
    const response = await fetch(
      "https://lista-convidados.herokuapp.com/convidados"
    )
    const convidados = await response.json()
    this.convidados = convidados
    this.gerarTabela()
    // .then((resposta) => {
    //   // console.log(resposta)
    //   return resposta.json()
    // })
    // .then((convidados) => {
    //   this.convidados = convidados
    //   this.gerarTabela()
    // })
  }

  buscarConvidadoEdicaoAPI(id) {
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        let convidadoEditar = JSON.parse(xhttp.responseText)

        document.getElementById("nomeConvidado").value = convidadoEditar.nome
        document.getElementById("idadeConvidado").value = convidadoEditar.idade
        document.getElementById("sexoConvidado").value = convidadoEditar.sexo
      }
    }
    xhttp.open(
      "GET",
      `https://lista-convidados.herokuapp.com/convidados/${id}`,
      true
    )
    xhttp.send()
  }

  inserirConvidadoAPI() {
    let conv = this.lerDados()
    conv.idade = parseInt(conv.idade)

    fetch("https://lista-convidados.herokuapp.com/convidados", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      },
      body: JSON.stringify(conv)
    })
      .then((response) => {
        return response.json()
      })
      .then((convidadoNovo) => {
        console.log("CONVIDADO NOVO: " + JSON.stringify(convidadoNovo))
        this.buscarConvidadosAPI()
      })

    // let conv = this.lerDados()
    // conv.idade = parseInt(conv.idade)
    // var xhttp = new XMLHttpRequest()
    // xhttp.onreadystatechange = () => {
    //   if (xhttp.readyState == 4 && xhttp.status == 200) {
    //     this.cancelar()
    //     this.buscarConvidadosAPI()
    //   }
    // }
    // xhttp.open(
    //   "POST",
    //   "https://lista-convidados.herokuapp.com/convidados",
    //   true
    // )
    // xhttp.setRequestHeader("Content-Type", "application/json")
    // xhttp.send(JSON.stringify(conv))
  }

  deletarConvidadoAPI(id) {
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        this.buscarConvidadosAPI()
      }
    }
    xhttp.open(
      "DELETE",
      `https://lista-convidados.herokuapp.com/convidados/${id}`,
      true
    )
    xhttp.send()
  }

  editarConvidadoAPI(convidado) {
    convidado._id = this.idEdicao
    convidado.idade = parseInt(convidado.idade)
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        this.cancelar()
        this.buscarConvidadosAPI()
      }
    }
    xhttp.open(
      "PUT",
      `https://lista-convidados.herokuapp.com/convidados/${convidado._id}`,
      true
    )
    xhttp.setRequestHeader("Content-Type", "application/json")
    xhttp.send(JSON.stringify(convidado))
  }

  /**
   * Métodos de uso geral da página
   */

  lerDados() {
    let convidado = {}

    convidado.nome = document.getElementById("nomeConvidado").value
    convidado.idade = document.getElementById("idadeConvidado").value
    convidado.sexo = document.getElementById("sexoConvidado").value

    return convidado
  }

  salvar() {
    let convidadoNovo = this.lerDados()

    if (this.validar(convidadoNovo)) {
      if (this.idEdicao == null) {
        //ADIÇÃO
        this.inserirConvidadoAPI(convidadoNovo)
      } else {
        //EDIÇÃO
        this.editarConvidadoAPI(convidadoNovo)
      }
    }
  }

  gerarTabela() {
    document.getElementById("tabelaCorpo").innerHTML = ""

    for (let i = 0; i < this.convidados.length; i++) {
      this.inserirLinha(this.convidados[i])
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
    imagemRemover.setAttribute(
      "onclick",
      `convidadoController.remover('${convidado._id}')`
    )
    imagemEditar.setAttribute(
      "onclick",
      `convidadoController.editar('${convidado._id}')`
    )
    //Adicionando as imagens como filhas das celulas referentes
    colunaRemover.appendChild(imagemRemover)
    colunaEditar.appendChild(imagemEditar)
  }

  remover(itemId) {
    if (confirm("Tem certeza que deseja remover este convidado?")) {
      this.deletarConvidadoAPI(itemId)
    }
  }

  editar(itemId) {
    this.idEdicao = itemId
    this.buscarConvidadoEdicaoAPI(itemId)
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
