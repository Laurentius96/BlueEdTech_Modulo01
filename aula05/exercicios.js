const prompt = require('prompt-sync')();

//=== Exercícios de Fixação ===\\

/**
    1) Faça um Programa que peça dois números e imprima o maior deles, e informe caso eles sejam iguais;
   
    2) Faça um programa para a leitura de quatro notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:
        A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
        A mensagem "Em recuperação", se a média for entre cinco e sete;
        A mensagem "Reprovado", se a média for menor que cinco.

    3) Faça um programa que peça um número par, e repita a execução caso o número digitado seja ímpar.
    
    4) Jogo da adivinhação - Escreva um programa que faça o computador “pensar” em um número inteiro entre 0 e 10 e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador. O programa deve ser repetir até o usuário acertar o número, e a cada palpite deve dizer se o número é maior ou menor que o palpite. No final dele deve escrever na tela que o usuário encontrou o número, e mostrar a quantidade de palpites que foi necessária.
  
 
 */

console.log(
    '\nSerá sortiado um número entre 0 e 10, será que você acerta de primeira?',
);

const numSorteado = Math.floor(Math.random() * 11);
let contador = 1;

while (true) {
    const escolha = +prompt('Escolha um número:');
    if (escolha > numSorteado) {
        console.log('\nO palpite é MAIOR que o número sorteado');
        contador++;
        continue;
    } else if (escolha < numSorteado) {
        console.log('\nO palpite é MENOR que o número sorteado!');
        contador++;
        continue;
    } else {
        console.log('\nVocê acertou!!');
        console.log(`\nNúmero de tentativas: ${contador}`);
        break;
    }
}
