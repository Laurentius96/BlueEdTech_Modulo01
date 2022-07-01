//=== Exercícios Extras ===\\

/**
    
    1) Reajuste salarial - As empresas @.com resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver o programa que calculará os reajustes. Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:

       * Salários até R$ 280,00 (incluindo): aumento de 20%.
       * Salários entre R$ 280,00 e R$ 700,00: aumento de 15%.
       * Salários entre R$ 700,00 e R$ 1500,00: aumento de 10%.
       * Salários de R$ 1500,00 em diante: aumento de 5%.

      Após o aumento ser realizado, informe na tela:

       * O salário antes do reajuste.
       * O percentual de aumento aplicado.
       * O valor do aumento.
       * O novo salário, após o aumento.
        
    2) Jogo da adivinhação - Escreva um programa que faça o computador “pensar” em um número inteiro entre 0 e 10 e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador. O programa deverá escrever na tela se o usuário venceu ou perdeu.

    3) Caixa Eletrônico - Faça um Programa para um caixa eletrônico. O programa deverá perguntar ao usuário a valor do saque e depois informar quantas notas de cada valor serão fornecidas. As notas disponíveis serão as de 1, 5, 10, 50 e 100 reais. O valor mínimo é de 10 reais e o máximo de 600 reais. O programa não deve se preocupar com a quantidade de notas existentes na máquina.

    Exemplo 1: Para sacar a quantia de 256 reais, o programa fornece duas notas de 100, uma nota de 50, uma nota de 5 e uma nota de 1.
    Exemplo 2: Para sacar a quantia de 399 reais, o programa fornece três notas de 100, uma nota de 50, quatro notas de 10, uma nota de 5 e quatro notas de 1.   

*/

//// 1)

const prompt = require('prompt-sync')();

console.log();
const antigoSal = +prompt(`Por favor, digito o salário do colaborador: `);
let ajuste;
cons
if (antigoSal > 1500) {
    ajuste = 0.05;
} else if (antigoSal >= 700 && antigoSal < 1500) {
    ajuste = 0.1;
} else if (antigoSal > 280 && antigoSal < 700) {
    ajuste = 0.15;
} else {
    ajuste = 0.2;
}

const novoSal = antigoSal + antigoSal * ajuste;

console.log(`\nO salário antes do reajuste: ${antigoSal} reais.`);
console.log(`O percentual de aumento aplicado: ${ajuste * 100}%.`);
console.log(`O valor do aumento: ` + antigoSal * ajuste + ` reais.`);
console.log(`O novo salário, após o aumento: ${novoSal} reais.`);
console.log();
