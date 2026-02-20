// string
let nome: string = 'Rafaela'
console.log(nome)
// nome = 28 erro

// numbers
let idade: number = 28
// idade = 'Rafaela Daiana'
idade = 28.5
console.log(idade);

// boolean
let possuiHobbies: boolean = false
// possuiHobbies = 1
console.log(possuiHobbies);

// tipos explícitos
let minhaIdade: number
minhaIdade = 28
console.log(typeof minhaIdade)
// minhaIdade = '28' gera erro

// array
let hobbies: any[] = ["cozinha", "Praticas Esportes"]
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100]
// hobbies = 100 erro
console.log(hobbies)

// tuplas
let endereco: [string, number, string] = ["Av Principal", 99, ""]
console.log(endereco)

endereco = ["Rua Importante", 1260, "Bloco A"]
console.log(endereco)

// enums
enum Cor {
  Cinza,
  Verde,
  Azul
}

let minhCor: Cor = Cor.Verde
console.log(minhCor)

// any
let carro: any = 'BMW'
console.log(carro)

carro = { marca: 'BMW', ano: 2013 }
console.log(carro)
console.log(typeof carro)

// funções
function retornaMeuNome(): string {
  // return minhaIdade
  return nome
}

console.log(retornaMeuNome())

function digaOi(): void {
  console.log('Oi')
  // return minhaIdade
}

digaOi()

function multiplicar(numA: number, numB: number): number {
  return numA * numB
}

// console.log(multiplicar(2, 'Rafa'))
console.log(multiplicar(4.7, 9))

// tipo função
// exemplo sem o tipo função
// let calculo
// calculo = digaOi
// calculo()

// calculo = multiplicar
// console.log(calculo(5, 6))

// Definindo tipo função

let calculo: (x: number, y: number) => number
calculo = multiplicar
console.log(calculo(5, 6))

// objetos
let usuario: { nome: string, idade: number } = {
  nome: 'Rafaela',
  idade: 28
}

console.log(usuario)
// usuario = {} erro

// usuario = { erro
//   name: 'Raimison'
//   age: 39
// }

usuario = {
  idade: 29,
  nome: 'Daiana'
}

console.log(usuario)

// Desafio
/*Criar um objeto funcionário com:
- Array de strings com os nomes dos surpevisores
- Função de bater ponto que recebe a hora (número) 
            e retorna uma string
            -> Ponto normal (<= 8)
            -> Fora do horário (> 8)
*/
// Alias
type Funcionario = {
  supervisores: string[],
  baterPonto: (horas: number) => string
}

let funcionaio: Funcionario = {
  supervisores: ['Rafaela', 'Daina'],
  baterPonto(horario: number): string {
    if (horario <= 8) {
      return 'Ponto normal.'
    } else {
      return 'Fora do horário!'
    }
  }
}

let funcionaio2: Funcionario = {
  supervisores: ['Raimison', 'Lima'],
  baterPonto(horario: number): string {
    if (horario <= 8) {
      return 'Ponto normal.'
    } else {
      return 'Fora do horário!'
    }
  }
}

console.log(funcionaio.supervisores)
console.log(funcionaio.baterPonto(8))
console.log(funcionaio.baterPonto(9))

console.log(funcionaio2.supervisores)
console.log(funcionaio2.baterPonto(8))
console.log(funcionaio2.baterPonto(9))

console.log(typeof funcionaio)

// Union Types
let nota: number | string = 10
console.log(`Minha nota é ${nota}`);
nota = 'Dez'
console.log(`Minha nota é ${nota}`);

// Checando tipos
let valor = 30

if (typeof valor === 'number') {
  console.log('É um number!')
} else {
  console.log(typeof valor)
}

// tipo never
function falha(msg: string): never {
  throw new Error(msg)
}

const produto = {
  nome: 'Sabão',
  preco: 1,
  validarProduto() {
    if (!this.nome || this.nome.trim().length == 0) {
      falha('Precisa ter um nome')
    }
    if (this.preco <= 0) {
      falha('Preço inválido')
    }
  }
}

produto.validarProduto()

// tipo null
let altura = 12
// altura = null

let alturaOpcional: null | number = 12
alturaOpcional = null

type Contato = {
  nome: string,
  tel1: string,
  tel2: string | null
}

const contato1: Contato = {
  nome: 'Rafaela',
  tel1: '98765432',
  tel2: null
}

console.log(contato1.nome)
console.log(contato1.tel1)
console.log(contato1.tel2)

let podeSerNulo = null //any
podeSerNulo = 12
console.log(podeSerNulo)
podeSerNulo = 'abc'
console.log(podeSerNulo)

// Desafio
// let contaBancaria = {
//   saldo: 3456,
//   depositar(valor) {
//     this.saldo += valor
//   }
// }

// let correntista = {
//   nome: 'Ana Silva',
//   contaBancaria: contaBancaria,
//   contatos: ['34567890', '98765432']
// }

// correntista.contaBancaria.depositar(3000)
// console.log(correntista)

// Resolução do desafio
type ContaBancaria = {
  saldo: number,
  depositar: (valor: number) => void
}

let contaBancaria: ContaBancaria = {
  saldo: 3456,
  depositar(valor: number) {
    this.saldo += valor
  }
}

type Correntista = {
  nome: string,
  contaBancaria: ContaBancaria,
  contatos: string[]
}

let correntista: Correntista = {
  nome: 'Rafaela Daina',
  contaBancaria: contaBancaria,
  contatos: ['34567890', '98765432']
}

correntista.contaBancaria.depositar(3000)
console.log(correntista)