const prompt = require('prompt-sync')();
//=== Exercícios de Fixação ===\\

/**
    1) Faça um Programa que leia 20 números inteiros e armazene-os num array. Armazene os números pares no array PAR e os números IMPARES no array IMPAR. Imprima os três vetores.
    
    2) Faça um Programa que peça a idade e a altura de 5 pessoas, armazene cada informação no seu respectivo array. Imprima a média de idade e de altura.
    
    3) Faça um programa em que o usuário escolha a quantidade de alunos a serem cadastrados e peça o nome e nota de cada um. Armazene as informações em duas listas separadas e no final imprima o nome e a nota correspondente de cada aluno, e a média total da notas.
    
    4) Faça um programa que simule um lançamento de dados. Lance o dado 100 vezes e armazene os resultados em um array. Depois, mostre quantas vezes cada valor foi conseguido

 */

//// 4)

console.log(`\nQuantas vezes você quer lançar o dado?`);
const vezes = +prompt(`R: `);

let contador = 1;
let soma01 = 0;
let soma02 = 0;
let soma03 = 0;
let soma04 = 0;
let soma05 = 0;
let soma06 = 0;

const resuldados = [];
while (contador <= vezes) {
    let backup = [];
    const dado = Math.floor(Math.random() * 6 + 1);
    resuldados.push(dado);
    backup.push(dado);

    while (true) {
        if (backup.indexOf(1) >= 0) {
            soma01++;
            break;
        } else if (backup.indexOf(2) >= 0) {
            soma02++;
            break;
        } else if (backup.indexOf(3) >= 0) {
            soma03++;
            break;
        } else if (backup.indexOf(4) >= 0) {
            soma04++;
            break;
        } else if (backup.indexOf(5) >= 0) {
            soma05++;
            break;
        } else if (backup.indexOf(6) >= 0) {
            soma06++;
            break;
        } else {
            break;
        }
    }
    contador++;
}

console.log(resuldados);

console.log(`\nO número 1 apareceu: ${soma01} vezes.`);
console.log(`O número 2 apareceu: ${soma02} vezes.`);
console.log(`O número 3 apareceu: ${soma03} vezes.`);
console.log(`O número 4 apareceu: ${soma04} vezes.`);
console.log(`O número 5 apareceu: ${soma05} vezes.`);
console.log(`O número 6 apareceu: ${soma06} vezes.`);
