//=== Exercícios de Fixação ===\\

/**
    1) Leia 2 valores A e B, que correspondem a 2 notas de um aluno. A seguir calcule e informe a média ponderada do aluno, sabendo que a nota A tem peso 4 e a nota B tem peso 6. Ex: nota a * 4 e nota b * 6.
    
    2) Neste problema, deve-se ler o nome de uma peça que chamaremos de peça1, o número de peças1 que o usuário quer, o valor unitário de cada peça1, o nome de uma peça2, o número de peças2 e o valor unitário de cada peça2. Após, calcule e mostre o valor a ser pago.
    
    3) Leia 3 valores de entrada, referentes à idade de uma pessoa em: anos, meses e dias. Exemplo: eu tenho 30 anos, 2 meses 3 7 dias. Calcule e exiba o total de dias que essa pessoa já viveu. Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias.
    
    4) Faça o cálculo contrário: leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias. Também considere todo ano com 365 dias e todo mês com 30 dias
  
 
 */

const prompt = require('prompt-sync')();

// 3) 
// const dataAtual = new Date();
// const anoAtual = dataAtual.getFullYear();

// console.log("Digite ano de nacimento: ");
// const num = +prompt();

// const ano = anoAtual - num; 
// const mes = ano * 12;
// const dia = mes * 30; 

// console.log(`Você têm ${ano} anos, já passou por ${mes} meses e viveu ${dia} dias!`);

// 4) 

console.log("Digite um valor inteiro: ");
const valor = parseInt(prompt());

const anos = parseInt(valor / 365);
const meses = parseInt((valor - (anos * 365))/30);
const dias = parseInt((valor - (anos * 365) - (meses * 30)));

console.log(`Você têm ${anos} anos, ${meses} mes(es) e ${dias} dia(as)!`);