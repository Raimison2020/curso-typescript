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
