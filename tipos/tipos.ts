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