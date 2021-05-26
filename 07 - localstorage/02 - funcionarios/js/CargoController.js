class CargoController {
  constructor() {
    this.cargos = []
  }

  lerCargo() {
    let cargo = {}

    cargo.descricao = document.getElementById("descricao").value
    cargo.salario = document.getElementById("salario").value

    return cargo
  }

  validar(cargo) {
    if (cargo.descricao && cargo.salario) return true

    document.getElementById("textoMensagem").innerText =
      "Preencha todos os campos!"
    document.querySelector(".mensagens").classList.add("show")
    return false
  }

  salvar() {
    let cargoAtual = this.lerCargo()

    if (this.validar(cargoAtual)) {
      cargoAtual.salario = parseFloat(cargoAtual.salario)
      this.cargos.push(cargoAtual)
      this.atualizarEstadoDoLS()
      this.limpar()
      this.gerarTabela()
    }
  }

  atualizarEstadoDoLS() {
    localStorage.setItem("cargos", JSON.stringify(this.cargos))
  }

  inicializarEstadoDoLS() {
    let cargosLS = localStorage.getItem("cargos")
    if (cargosLS == null) {
      localStorage.setItem("cargos", JSON.stringify([]))
    } else {
      this.cargos = JSON.parse(cargosLS)
      this.gerarTabela()
    }
  }

  gerarTabela() {
    document.getElementById("tbody").innerHTML = ""

    for (let i = 0; i < this.cargos.length; i++) {
      this.inserirLinha(this.cargos[i])
    }
  }

  inserirLinha(cargo) {
    let tabela = document.getElementById("tbody")

    let linha = tabela.insertRow()

    let colunaDescricao = linha.insertCell()
    let colunaSalario = linha.insertCell()

    colunaDescricao.innerText = cargo.descricao
    colunaSalario.innerText = `R$ ${cargo.salario.toFixed(2)}`
  }

  limpar() {
    document.getElementById("descricao").value = ""
    document.getElementById("salario").value = ""
  }

  fecharMensagem() {
    document.querySelector(".mensagens").classList.remove("show")
  }
}

let cargoController = new CargoController()
