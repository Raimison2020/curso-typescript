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
// tipo função
// exemplo sem o tipo função
// let calculo
// calculo = digaOi
// calculo()
// calculo = multiplicar
// console.log(calculo(5, 6))
// Definindo tipo função
let calculo;
calculo = multiplicar;
console.log(calculo(5, 6));
// objetos
let usuario = {
    nome: 'Rafaela',
    idade: 28
};
console.log(usuario);
// usuario = {} erro
// usuario = { erro
//   name: 'Raimison'
//   age: 39
// }
usuario = {
    idade: 29,
    nome: 'Daiana'
};
console.log(usuario);
let funcionaio = {
    supervisores: ['Rafaela', 'Daina'],
    baterPonto(horario) {
        if (horario <= 8) {
            return 'Ponto normal.';
        }
        else {
            return 'Fora do horário!';
        }
    }
};
let funcionaio2 = {
    supervisores: ['Raimison', 'Lima'],
    baterPonto(horario) {
        if (horario <= 8) {
            return 'Ponto normal.';
        }
        else {
            return 'Fora do horário!';
        }
    }
};
console.log(funcionaio.supervisores);
console.log(funcionaio.baterPonto(8));
console.log(funcionaio.baterPonto(9));
console.log(funcionaio2.supervisores);
console.log(funcionaio2.baterPonto(8));
console.log(funcionaio2.baterPonto(9));
console.log(typeof funcionaio);
// Union Types
let nota = 10;
console.log(`Minha nota é ${nota}`);
nota = 'Dez';
console.log(`Minha nota é ${nota}`);
