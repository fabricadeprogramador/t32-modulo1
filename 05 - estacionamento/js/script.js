class EstacionamentoController {
  constructor() {
    this.geradorId = 1
    this.carros = []
    this.editId = -1
  }

  salvar() {
    let carroNovo = this.lerDados()

    if (this.validar(carroNovo)) {
      this.adicionar(carroNovo)
    }

    this.cancelar()
    this.gerarTabela()

    console.log(this.carros)
  }

  adicionar(carroNovo) {
    carroNovo.id = this.geradorId
    carroNovo.ano = parseInt(carroNovo.ano)

    this.carros.push(carroNovo)
    this.geradorId++
  }

  excluir(id) {
    if (confirm("Deeja realmente deletar o ID " + id)) {
      let i = 0
      let indice = -1

      while (i < this.carros.length && indice == -1) {
        if (this.carros[i].id == id) {
          indice = i
          this.carros.splice(i, 1)
        }

        i++
      }

      this.gerarTabela()
    }
  }

  lerDados() {
    let carro = {}

    carro.nome = document.getElementById("nomeVeiculo").value
    carro.marca = document.getElementById("marcaVeiculo").value
    carro.ano = document.getElementById("anoVeiculo").value

    return carro
  }

  validar(carroNovo) {
    if (carroNovo.nome != "" && carroNovo.marca != "" && carroNovo.ano != "") {
      return true
    }

    alert("Preencha todos os campos!")
    return false
  }

  cancelar() {
    document.getElementById("nomeVeiculo").value = ""
    document.getElementById("marcaVeiculo").value = ""
    document.getElementById("anoVeiculo").value = ""
  }

  gerarTabela() {
    document.getElementById("tbody").innerHTML = ""
    for (let i = 0; i < this.carros.length; i++) {
      this.inserirLinha(this.carros[i])
    }
  }

  inserirLinha(carro) {
    let tabela = document.getElementById("tbody")

    let linha = tabela.insertRow()
    // linha.insertCell().innerText = carro.nome

    let colunaNome = linha.insertCell()
    let colunaMarca = linha.insertCell()
    let colunaAno = linha.insertCell()
    let colunaEditar = linha.insertCell()
    let colunaExcluir = linha.insertCell()

    colunaNome.innerText = carro.nome
    colunaMarca.innerText = carro.marca
    colunaAno.innerText = carro.ano

    let carroParametro = JSON.stringify(carro)

    colunaEditar.innerHTML = `<img src="img/edit.svg" onclick="estacionamentoController.preparaEdicao(${carroParametro})">`
    colunaExcluir.innerHTML = `<img src="img/delete.svg" onclick="estacionamentoController.excluir(${carro.id})">`

    //O CÓDICO COMENTADO É EQUIVALENTE AS DUAS LINHAS ANTERIORES

    // let imgEditar = document.createElement("img")
    // let imgExcluir = document.createElement("img")

    // imgEditar.src = "img/edit.svg"
    // imgExcluir.src = "img/delete.svg"

    // imgEditar.setAttribute("onclick", `estacionamentoController.editar(${carro.id})`)
    // imgExcluir.setAttribute("onclick", `estacionamentoController.excluir(${carro.id})`)

    // colunaEditar.appendChild(imgEditar)
    // colunaExcluir.appendChild(imgExcluir)
  }

  preparaEdicao(carro) {
    alert("aaaa")
    // this.editId = carro.id;

    // document.getElementById("nomeVeiculo").value = carro.nome;
    // document.getElementById("marcaVeiculo").value = carro.marca;
    // document.getElementById("anoVeiculo").value = carro.ano;
  }

  calcularResultado() {}
}

let estacionamentoController = new EstacionamentoController()
