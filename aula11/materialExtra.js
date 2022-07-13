console.clear();
const prompt = require('prompt-sync')();

/** Material extra - Arrow functions:
 
    * Uma expressão arrow function possui uma sintaxe mais curta quando comparada a uma expressão de função. É uma maneira de escrever funções com uma sintaxe diferente que pode tornar o seu código mais enxuto.

*/

//FUCTION
function somar01(a, b) {
    return a + b;
}

//ARROW FUCTION
const somar02 = (a, b) => {
    const soma = a + b;
    return soma;
};

console.log(somar01(15, 20));
console.log(somar02(15, 20));

//// Porém, se o corpo da função contiver apenas uma instrução que é retornada, podemos omitir as chaves { } e o return, escrevendo toda a função em uma única linha:

const somar03 = (a, b) => a + b;

console.log(somar03(15, 20));

/** Material extra - forEach:
 
    * A função forEach() executa uma dada função em cada elemento de um array. Ele é usado com 3 argumentos (2 são opcionais), que recebem:

        Valor: O valor do elemento que está sendo processado;
    
        Índice (opcional): O índice do elemento que está sendo processado;
    
        Array (opcional): O array inteiro.

 */

function funcArray(a, b, c) {
    console.log('Valor: ', a);
    console.log('Índice: ', b);
    console.log('Array: ', c);
    console.log();
}

let lista = ['Blue', 'EdTech', 'Módulo 1'];

lista.forEach(funcArray);

////É uma maneira simples de usar o for para listas, muito útil por trabalhar de uma vez com todos os elementos (índice, valor, e a própria lista)

/** Material extra - Sintaxe de Espalhamento:
 
    * A Spread syntax (...), também conhecido como spread operator, permite que um objeto iterável, como uma expressão de array ou uma string seja expandido para ser usado onde zero ou mais argumentos são esperados.

    Dessa forma, você não precisa passar cada parâmetro individualmente, basta usar: expressão arrow function possui uma sintaxe mais curta quando comparada a uma expressão de função. É uma maneira de escrever funções com uma sintaxe diferente que pode tornar o seu código mais enxuto.

    funcao(...lista)


*/

function somar(a, b, c) {
    console.log('A soma é: ', a + b + c);
}

const numeros = [10, 15, 20];

somar(...numeros);

//// Vale ressaltar que a declaração pode ser usada fora do contexto de funções, como a seguir:

const numeros01 = [10, 15, 20];

const copiaDosNumeros = [...numeros01]; // [10, 15, 20]

