class FuncionarioController {
  constructor() {
    this.funcionarios = []
    this.cargos = []
  }

  lerFuncionario() {
    let funcionario = {}

    funcionario.nome = document.getElementById("nome").value
    let elementoSexo = document.querySelector("[type=radio]:checked")
    elementoSexo != null
      ? (funcionario.sexo = elementoSexo.value)
      : (funcionario.sexo = "")
    funcionario.cargo = document.getElementById("cargos").value

    return funcionario
  }

  validar(funcionario) {
    if (funcionario.nome && funcionario.sexo && funcionario.cargo) return true

    document.getElementById("textoMensagem").innerText =
      "Preencha todos os campos!"
    document.querySelector(".mensagens").classList.add("show")
    return false
  }

  salvar() {
    let funcionarioAtual = this.lerFuncionario()

    if (this.validar(funcionarioAtual)) {
      let indiceCargo = parseInt(funcionarioAtual.cargo)
      funcionarioAtual.cargo = this.cargos[indiceCargo]
      this.funcionarios.push(funcionarioAtual)
      this.atualizarEstadoDoLS()
      this.limpar()
      this.gerarTabela()
    }
  }

  atualizarEstadoDoLS() {
    localStorage.setItem("funcionarios", JSON.stringify(this.funcionarios))
  }

  inicializarEstadoDoLS() {
    let funcionariosLS = localStorage.getItem("funcionarios")
    let cargosLS = localStorage.getItem("cargos")
    if (funcionariosLS == null) {
      localStorage.setItem("funcionarios", JSON.stringify([]))
    } else {
      this.funcionarios = JSON.parse(funcionariosLS)
      this.gerarTabela()
    }

    if (cargosLS == null) {
      localStorage.setItem("cargos", JSON.stringify([]))
    } else {
      this.cargos = JSON.parse(cargosLS)
      this.inicializarSelectCargos()
    }
  }

  inicializarSelectCargos() {
    let select = document.getElementById("cargos")
    select.innerHTML = "<option value=''>Selecione...</option>"

    for (let i = 0; i < this.cargos.length; i++) {
      let option = document.createElement("option")
      option.value = i
      option.innerText = this.cargos[i].descricao
      select.appendChild(option)
    }
  }

  gerarTabela() {
    document.getElementById("tbody").innerHTML = ""

    for (let i = 0; i < this.funcionarios.length; i++) {
      this.inserirLinha(this.funcionarios[i])
    }
  }

  inserirLinha(funcionario) {
    let tabela = document.getElementById("tbody")

    let linha = tabela.insertRow()

    let colunaNome = linha.insertCell()
    let colunaSexo = linha.insertCell()
    let colunaCargo = linha.insertCell()
    let colunaSalario = linha.insertCell()

    colunaNome.innerText = funcionario.nome
    colunaSexo.innerText = funcionario.sexo
    colunaCargo.innerText = funcionario.cargo.descricao
    colunaSalario.innerText = `R$ ${funcionario.cargo.salario.toFixed(2)}`
  }

  limpar() {
    document.getElementById("nome").value = ""
    document.getElementById("masc").checked = false
    document.getElementById("fem").checked = false
    document.getElementById("cargos").value = ""
  }

  fecharMensagem() {
    document.querySelector(".mensagens").classList.remove("show")
  }
}

let funcionarioController = new FuncionarioController()
