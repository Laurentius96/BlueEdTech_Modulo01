//=== Exercícios de Fixação ===\\

/**
    1) Faça um Programa que peça dois números e imprima o maior deles, e informe caso eles sejam iguais;
   
    2) Faça um programa para a leitura de quatro notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:
        A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
        A mensagem "Em recuperação", se a média for entre cinco e sete;
        A mensagem "Reprovado", se a média for menor que cinco.

    3) Faça um programa que leia um número, e informe se ele é par ou impar;

    4) Faça um programa que leia 2 valores inteiros (A e B). Após, o programa deve mostrar uma mensagem "Sao Multiplos" ou "Nao sao Multiplos", indicando se os valores lidos são múltiplos entre si
  
 
 */
const prompt = require('prompt-sync')();

/// 3)
//console.log(`Por favor, digite um número:`);
//const num = +prompt();

//if (num % 2 === 0) {
//    console.log(`O número ${num} é Par!`);
//} else {
//    console.log(`O número ${num} é Impar!`);
//}
//console.log();

/// 4)
console.log();
console.log(`Por favor, digite o primeiro número:`);
const num01 = +prompt();
console.log(`Por favor, digite o segundo número:`);
const num02 = +prompt();

if (num01 % num02 === 0 || num02 % num01 === 0) {
    console.log(`\nOs números ${num01} e ${num02} são multiplos! `);
} else {
    console.log(`\nOs números ${num01} e ${num02} não são multiplos! `);
}

