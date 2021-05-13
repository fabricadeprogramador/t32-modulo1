class EstacionamentoController {
  constructor() {
    this.geradorId = 1
    this.carros = []
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

  gerarTabela() {}

  calcularResultado() {}
}

let estacionamentoController = new EstacionamentoController()
