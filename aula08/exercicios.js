console.clear();
const prompt = require('prompt-sync')();
//=== Exercícios de Fixação ===\\

/**
    1) Peça ao usuário uma quantidade de linhas e e outra de colunas, e imprima essas informações na forma de uma tabela como no exemplo de 3 linhas e 4 colunas:

    [ 0, 1, 2, 3 ]
    [ 1, 2, 3, 4 ]
    [ 2, 3, 4, 5 ]
    
    2) Escreva um programa que peça um número e escreva o fatorial dele. Exemplo 6! = 6 x 5 x 4 x 3 x 2 x 1 = 720
    
    3) Faça um programa que peça um número e imprima toda a tabuada dele do 1 ao 10.
    
    4) Faça um programa que carregue uma lista com os modelos de cinco carros. Carregue uma outra lista com o consumo desses carros, isto é, quantos quilômetros cada um desses carros faz com um litro de combustível. Calcule e mostre:
        
        > O modelo do carro mais econômico;

        > Quantos litros de combustível cada um dos carros cadastrados consome para percorrer uma distância de 1000 quilômetros e quanto isto custará, considerando um que a gasolina custe R$ 5,50 o litro.

*/

//// 1)
// const matriz = [];
// console.log('\nQuantas linhas você quer?');
// const linha = +prompt(`R:`);
// console.log('\nQuantas colunas você quer?');
// const coluna = +prompt(`R:`);

// for (let i = 0; i < linha; i++) {
//     let linhaInterna = [];
//     for (let j = 0; j < coluna; j++) {
//         linhaInterna.push(j + i);
//     }
//     matriz.push(linhaInterna);
// }

// for (let i of matriz) {
//     console.log(i);
// }

//// 2)
// console.log(`Qual número fatorial você quer saber: `);
// const escolha = +prompt(`R:`);
// let fatorial = 1;
// for (let i = 1; escolha >= i; i++) {
//     fatorial = fatorial * i;
// }

// console.log(fatorial);

//// 4)