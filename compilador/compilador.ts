let canal: string = 'Gaveta'
let inscritos: number = 610234

// canal = inscritos
console.log(`Canal=${canal}`)

// let nome = 'Lima'

// strictNullChecks
function saudar(isManha: boolean): string {
  let saudacao: string
  if (isManha) {
    saudacao = 'Bom dia!'
  } else {
    saudacao = "Tenha uma boa vida!"
  }
  return saudacao
}