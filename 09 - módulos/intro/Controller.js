import { Cliente, somarTodos } from "./Cliente.js"
import Compra from "./Compra.js"

let cli = new Cliente("Jão", "11111111111", 25, "M")
let compra = new Compra(cli, 1500)

console.log(JSON.stringify(cli))
console.log(JSON.stringify(compra))
console.log(somarTodos(2, 2, 2, 2))
console.log(`${cli.nome} é maior de idade? ${cli.maiorDeIdade()}`)
