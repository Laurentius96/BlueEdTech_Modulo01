/** Booleanos:

  * Um booleano, é um tipo de dado lógico que pode ter apenas um de dois valores possíveis: verdadeiro ou falso. Por exemplo, em JavaScript, condicionais booleanas são usadas para decidir quais trechos do código serão executados ou repetidas.

  Com isso é possível fazer comparações e obter como resultado true ou false.

    - Variável terá o mesmo tipo que sua comparação* - variável = boolean
    - Toda informação terá um "valor" e essa tera um "tipo" -> (true - boolean); (10, number)  
*/
const prompt = require('prompt-sync')();

console.log('--- Boolean ---');

const comparacao = 5 > 3;
console.log(comparacao);
console.log(typeof comparacao);
console.log();

/** Atribuição, Comparações de igualdade (= , ==, ===) e Diferenças:
  
  = ---> É usado para atribuir um valor; 
  
  == --> Compara se os dois valores são iguais, independente do tipo;
  
  === -> Compara se os valores são iguais e do mesmo tipo;
  
  != -->  Verifica se um valor é diferente de outro;
  
  !== ->  Verifica se um valor e tipo é diferente de outro;

 */

console.log('--- Atribuição e Comparações de igualdade (= , ==, ===): ---');

console.log('==');
const comparacao1 = 50 == '50'; // true
const comparacao2 = 50 == 50; // true
console.log(comparacao1);
console.log(comparacao2);
console.log();

console.log('===');
const comparaTipo1 = 50 === '50'; // false
const comparaTipo2 = 50 === 50; // true
console.log(comparaTipo1);
console.log(comparaTipo2);
console.log();

console.log('!=');
const comparaString = 'Blue' != 'Blue';
console.log(comparaString);
console.log();

console.log('!==');
const comparaString02 = '12' !== 12;
console.log(comparaString02);
console.log();

/** Condicionais:
  
  * São formas que o nosso programa tem de tomar uma decisão, se deve seguir por um caminho ou por outro. Ele irá avaliar uma condição, e dependendo do resultado executará um código diferente.

  Usamos o "if", Podemos pensar em português: "Se tal condição for verdadeira, executarei isso. Senão, executarei isso".

 */

console.log('--- Condicionais ---');
const num1 = +prompt('Digite um número: ');
const num2 = +prompt('Digite outro número: ');

if (num1 === num2) {
    console.log('Os números são iguais. A condição é verdadeira.');
}

console.log();

/** Condicionais - Usando mais de uma condição:

  Nós podemos usar mais de uma condição para a execução do if, para isso podemos usar alguns operadores:

    > && -> Lógica AND (e):
        Passamos duas (ou mais) condições, e todas precisam resultar em verdadeira para que a declaração seja executada;

    > || -> Lógica OR (ou):
        Passamos duas (ou mais) condições, e pelo menos uma precisa resultar em verdadeira para que a declaração seja executada;

    > Else -> Para o else não é necessário repetir a condição, pois ela será executada sempre que a condição anterior for falsa.

 */
