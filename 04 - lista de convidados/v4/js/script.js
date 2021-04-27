class ListaConvidadoController {
  constructor() {
    this.contador = 1
    this.idEdicao = null
    this.nomes = [
      { nome: 'Jão', idade: 15 },
      { nome: 'Maria', idade: 27 }
    ]
  }

  lerDados() {
    let convidado = {}

    convidado.nome = document.getElementById('nomeConvidado').value
    convidado.idade = document.getElementById('idadeConvidado').value
    convidado.sexo = document.getElementById('sexoConvidado').value

    return convidado
  }

  salvar() {
    let convidadoNovo = this.lerDados()

    if (this.validar(convidadoNovo)) {
      if (this.idEdicao == null) {
        //ADIÇÃO
        //Busca o elemento tabela
        let tabela = document.getElementById('tabelaCorpo')

        //Insere uma nova linha na tabela
        let linha = tabela.insertRow()

        //Setando ID da linha
        linha.id = 'linha-' + this.contador

        //Insere as colunas na linha
        let colunaId = linha.insertCell()
        let colunaNome = linha.insertCell()
        let colunaIdade = linha.insertCell()
        let colunaSexo = linha.insertCell()
        let colunaRemover = linha.insertCell()
        let colunaEditar = linha.insertCell()

        //Setando IDs das colunas necessárias
        colunaNome.id = 'colunaNome-' + this.contador
        colunaIdade.id = 'colunaIdade-' + this.contador
        colunaSexo.id = 'colunaSexo-' + this.contador

        //Seta os valores nas colunas
        colunaId.innerText = this.contador
        colunaNome.innerText = convidadoNovo.nome
        colunaIdade.innerText = convidadoNovo.idade
        colunaSexo.innerText = convidadoNovo.sexo

        //Cria os elementos de imagem
        let imagemRemover = document.createElement('img')
        let imagemEditar = document.createElement('img')

        //Setar as propriedades das imagens
        imagemRemover.src = 'img/delete.svg'
        imagemEditar.src = 'img/edit.svg'

        imagemRemover.setAttribute(
          'onclick',
          'convidadoController.remover(' + this.contador + ')'
        )
        imagemEditar.setAttribute(
          'onclick',
          'convidadoController.editar(' + this.contador + ')'
        )

        //Adicionando as imagens como filhas das celulas referentes
        colunaRemover.appendChild(imagemRemover)
        colunaEditar.appendChild(imagemEditar)

        //Incrementa o contador
        this.contador++
      } else {
        //EDIÇÃO

        document.getElementById('colunaNome-' + this.idEdicao).innerText =
          convidadoNovo.nome
        document.getElementById('colunaIdade-' + this.idEdicao).innerText =
          convidadoNovo.idade
        document.getElementById('colunaSexo-' + this.idEdicao).innerText =
          convidadoNovo.sexo
      }
      this.cancelar()
    }
  }

  remover(itemId) {
    if (confirm('Tem certeza que deseja remover este elemento?')) {
      let id = 'linha-' + itemId

      document.getElementById(id).remove()
    }
  }

  editar(itemId) {
    //Salva o número referente ao id do elemento clicado pra edição
    this.idEdicao = itemId

    //Setar os valores nos inputs
    document.getElementById('nomeConvidado').value = document.getElementById(
      'colunaNome-' + itemId
    ).innerText
    document.getElementById('idadeConvidado').value = document.getElementById(
      'colunaIdade-' + itemId
    ).innerText
    document.getElementById('sexoConvidado').value = document.getElementById(
      'colunaSexo-' + itemId
    ).innerText
  }

  validar(convidado) {
    let mensagemValidacao = ''

    if (convidado.nome == '') {
      mensagemValidacao += 'Campo nome é obrigatório! \n'
    }

    if (convidado.idade == '') {
      mensagemValidacao += 'Campo idade é obrigatório! \n'
    }

    if (convidado.sexo == '') {
      mensagemValidacao += 'Campo sexo é obrigatório! \n'
    }

    if (mensagemValidacao != '') {
      alert(mensagemValidacao)
      return false
    }

    return true
  }

  cancelar() {
    document.getElementById('nomeConvidado').value = ''
    document.getElementById('idadeConvidado').value = ''
    document.getElementById('sexoConvidado').value = ''
    this.idEdicao = null
  }
}

let convidadoController = new ListaConvidadoController()
