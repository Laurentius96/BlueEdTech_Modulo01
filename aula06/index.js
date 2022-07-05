const prompt = require('prompt-sync')();
/** Array:
 
  * Array é geralmente descrito como uma lista contendo registros.

    Outros nomes comuns para o array, além de lista, são: vetor (vector), collection, conjunto (set), entre alguns outros, sendo que o comportamento pode ter variações dependendo da linguagem de programação em questão.

    Eles são containers que possuem múltiplos valores armazenados. Um array pode ser armazenado em variáveis e ser tratado de forma muito similar a qualquer outro tipo de informação.

    A diferença principal está em podermos acessar cada valor dentro dessa lista individualmente, podendo realizar diversas operações com a lista, como combiná-la com os laços de repetição, que tornam a brincadeira muito mais interessante e aumentam o potencial de resolução de problemas.

    - Podem ser chamados de vertores, coleção ou colletiction, conjuntos, objetos, dicinários*

 */

//// Exemplo 01:
console.log(`\nExp:01`);
const numeros = [1, 2, 3, 4, 5];
console.log(numeros); // [1, 2, 3, 4, 5]

/** Acessando elementos dentro de um array:
 
  * Cada elemento pode ser localizado pela sua posição dentro do array.     
    
    Essa posição é o índice, e nós podemos acessar um elemento específico passando esse índice através de colchetes: [ ]

 */

//// Exemplo 02:
console.log(`\nExp:02`);
const filmes = ['Jumanji', 'Mad Max'];

// Exibindo todo o array
console.log(filmes); // ["Jumanji, "Mad Max"]

// Exibindo apenas o primeiro item (índice 0)
console.log(filmes[0]); // "Jumanji"

// Armazenando o primeiro filme em uma variável e exibindo-o
const primeiroFilme = filmes[0];
console.log(primeiroFilme); // "Jumanji"

/** Substituindo o valor de um indice
 
  * Da mesma forma, podems modificar o valor de um item em um array. Primeiro, acessamos o item pelo índice. Depois, passamos o novo valor desejado, como a seguir:

*/

//// Exemplo 03:
console.log(`\nExp:3`);
const listafilmes = ['Jumanji', 'Titanic'];

// Acessamos o item do array pelo índice e atribuímos um novo valor
listafilmes[0] = 'Mad Max';

// Exibimos a nova informação atualizada
console.log(listafilmes); // ["Mad Max", "Titanic"]

/**
  Um ponto de atenção é que precisamos acessar o índice diretamente para que o valor seja atualizado.
  
  Se colocarmos o item dento de uma variável e atualizarmos essa variável, o valor não será modificado no array, apenas na variável.

*/

//// Exemplo 04:

console.log(`\nExp:04`);
// Declarando um array

const n = [1, 2, 3];

// Criando um variável para o primeiro item

let primeiroItem = n[0];
console.log(primeiroItem); // 1

// Alterando a variável

primeiroItem = 5;

console.log(n); // [1, 2, 3] - O array permanece sem alteração
console.log(primeiroItem); // 5 - O valor da variável é alterado

// Alterando diretamente pelo índice

n[0] = 99;

console.log(n); // [99, 2, 3] - O array é atualizado
console.log(primeiroItem); // 5 - a variável permanece com o valor

/** Funções para manipulações de Arrays:
 
  * Os arrays tem funções próprias para serem manipuladas, e podemos fazer praticamente o que quisermos com elas usando a função correta!
    
  Vamos ver algumas das mais usadas, mas você pode acessar uma lista mais completa aqui.

*/

//// .length - é uma propriedade que retorna o tamanho (número de elementos) do array.
// Com isso, você pode usar a propriedade .length para armazenar o valor em uma variável, ou simplesmente exibir, usando junto de um console.log(), como a seguir:

console.log(`\nExemplo 05 - .length`);
const filmes01 = ['Forrest Gump', 'Mad Max'];

console.log(filmes01.length); // 2

const tamanho = filmes01.length;
console.log(tamanho); // 2

//// .push() - é uma função que adiciona um ou mais elementos ao final de um array. Com isso, o array cresce e recebe novos índices para os novos elementos

console.log(`\nExemplo 05 - .puch()`);
const filmes02 = [];
filmes02.push('Forrest Gump', 'Mad Max');
console.log(filmes02); // ["Forrest Gump", "Mad Max"]

//// .unshift() - é uma função que adiciona um ou mais elementos ao início de um array.

console.log(`\nExemplo 06 - .unshift()`);
console.log(filmes02[0]); // "Forrest Gump"

filmes.unshift('Matrix');

console.log(filmes02[0]); // Matrix
console.log(filmes02); // ["Matrix", "Forrest Gump", "Mad Max"]

//// .pop() - é uma função que remove o último elemento de um array.
/*

É importante saber que essa função retorna o elemento removido (vamos aprender mais sobre retorno de funções futuramente).

Na prática, isso quer dizer que ele retira o elemento do array e nos entrega. A partir disso, nós podemos, por exemplo, armazená-lo em uma variável.

*/

console.log(`\nExemplo 07 - .pop()`);
const filmes03 = ['Forrest Gump', 'Jumanji', 'Mad Max', 'Interestelar'];
filmes03.pop(); // Remove o filme "Interestelar"
console.log(filmes03); // ["Forrest Gump", "Jumanji", "Mad Max"]

const filmeRemovido03 = filmes03.pop(); // Remove o filme "Mad Max"
console.log(filmes03); // ["Forrest Gump", "Jumanji"]
console.log(filmeRemovido03); // "Mad Max"

//// .shift() - é uma função que remove o primeiro elemento de um array. Assim como o .pop(), ela retorna o elemento removido.

console.log(`\nExemplo 08 - .shift()`);
const filmes04 = ['Forrest Gump', 'Jumanji', 'Mad Max', 'Interestelar'];
filmes04.shift(); // Remove o filme "Forrest Gump"
console.log(filmes04); // ["Jumanji", "Mad Max", "Interestelar"]

const filmeRemovido04 = filmes04.shift(); // Remove o filme "Jumanji"
console.log(filmes04); // ["Mad Max", "Interestelar"]
console.log(filmeRemovido04); // "Jumanji"
