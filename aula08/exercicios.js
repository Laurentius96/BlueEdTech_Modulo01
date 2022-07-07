console.clear();
const prompt = require('prompt-sync')();
//=== Exercícios de Fixação ===\\

/**
    1) Peça ao usuário uma quantidade de linhas e e outra de colunas, e imprima essas informações na forma de uma tabela como no exemplo de 3 linhas e 4 colunas:

    [ 0, 1, 2, 3 ]
    [ 1, 2, 3, 4 ]
    [ 2, 3, 4, 5 ]
    
    2) Faça um Programa que peça a idade e a altura de 5 pessoas, armazene cada informação no seu respectivo array. Imprima a média de idade e de altura.
    
    3) Faça um programa em que o usuário escolha a quantidade de alunos a serem cadastrados e peça o nome e nota de cada um. Armazene as informações em duas listas separadas e no final imprima o nome e a nota correspondente de cada aluno, e a média total da notas.
    
    4) Faça um programa que simule um lançamento de dados. Lance o dado 100 vezes e armazene os resultados em um array. Depois, mostre quantas vezes cada valor foi conseguido

 */

//// 1)
const matriz = [];
console.log('\nQuantas linhas você quer?');
const linha = +prompt(`R:`);
console.log('\nQuantas colunas você quer?');
const coluna = +prompt(`R:`);

for (let i = 0; i < linha; i++) {
    let linhaInterna = [];
    for (let j = 0; j < coluna; j++) {
        linhaInterna.push(j + i);
    }
    matriz.push(linhaInterna);
}

for (let i of matriz) {
    console.log(i);
}
