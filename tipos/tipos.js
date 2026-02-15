"use strict";
// string
let nome = 'Rafaela';
console.log(nome);
// nome = 28 erro
// numbers
let idade = 28;
// idade = 'Rafaela Daiana'
idade = 28.5;
console.log(idade);
// boolean
let possuiHobbies = false;
// possuiHobbies = 1
console.log(possuiHobbies);
// tipos explícitos
let minhaIdade;
minhaIdade = 28;
console.log(typeof minhaIdade);
// minhaIdade = '28' gera erro
// array
let hobbies = ["cozinha", "Praticas Esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100];
// hobbies = 100 erro
console.log(hobbies);
// tuplas
let endereco = ["Av Principal", 99, ""];
console.log(endereco);
endereco = ["Rua Importante", 1260, "Bloco A"];
console.log(endereco);
// enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
})(Cor || (Cor = {}));
let minhCor = Cor.Verde;
console.log(minhCor);
// any
let carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2013 };
console.log(carro);
console.log(typeof carro);
// funções
function retornaMeuNome() {
    // return minhaIdade
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log('Oi');
    // return minhaIdade
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
// console.log(multiplicar(2, 'Rafa'))
console.log(multiplicar(4.7, 9));
