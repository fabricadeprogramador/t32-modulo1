class Cliente {
  constructor(nome, cpf, idade, sexo) {
    this.nome = nome
    this.cpf = cpf
    this.idade = idade
    this.sexo = sexo
  }

  maiorDeIdade() {
    return this.idade >= 18 ? true : false
  }
}

const somarTodos = function somarTodos(n1, n2, n3, n4) {
  return n1 + n2 + n3 + n4
}

export { Cliente, somarTodos }
