class Carro {
  constructor(nome, ano, marca) {
    this.nome = nome
    this.ano = ano
    this.marca = marca
  }

  carroToString() {
    return `Nome: ${this.nome}\nMarca: ${this.marca}\nAno: ${this.ano}`
  }
}

export default Carro
