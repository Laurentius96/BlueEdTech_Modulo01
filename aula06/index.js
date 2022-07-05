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

/* .splice() 

É uma função que altera o conteúdo de uma lista, podendo ao mesmo tempo adicionar, remover ou substituir os elementos que estão lá dentro.

Essa função recebe 3 parâmetros, sendo que:

  1º parâmetro indica o índice a partir de onde o splice será "aplicado";
  2º parâmetro (opcional) indica a quantidade de itens a serem removidos;
  3º parâmetro em diante (opcional) passa os novos elementos a serem adicionados;
  
  Caso o 2º parâmetro não seja especificado, ou seja, a função recebe apenas o índice (1º parâmetro), todos os elementos a partir deste índice passado serão removidos.
  
  Caso o 2º parâmetro seja 0, nenhum elemento será removido do array, portanto, pelo menos um novo elemento (3º parâmetro) deve ser especificado, sendo que ele apenas será adicionado.
  
  Caso o 2º parâmetro seja maior que 0, ele vai deletar essa quantidade de elementos, e eles podem ser substituídos pelos elementos passados como 3º parâmetro (caso tenham sido passados, se o 3º parâmetro não for especificado, ele apenas remove os itens).
  
  */

//// Exemplo 1 - apenas 1º parâmetro:
console.log(`\nExemplo 09 - .shift(), passando pelo 1º parâmetro:`);
const filmes05 = ['Forrest Gump', 'Interestelar', 'Jumanji', 'Mad Max'];

// Remove todos os elementos a partir do índice 2 em diante
const filmesRemovidos05 = filmes05.splice(2);
console.log(filmesRemovidos05); // ["Jumanji", "Mad Max"]
console.log(filmes05); // ["Forrest Gump", "Interestelar"]

//// Exemplo 2 - passando 1º e 2º parâmetro:
console.log(`\nPassando 1º e 2º parâmetro:`);
const filmes06 = ['Forrest Gump', 'Interestelar', 'Jumanji', 'Mad Max'];

// A partir do índice 2, remove 1 elemento, portanto, apenas o item de índice 2
const filmesRemovidos06 = filmes06.splice(2, 1);
console.log(filmesRemovidos06); // ["Jumanji"]

console.log(filmes06); // ["Forrest Gump", "Interestelar", "Mad Max"]

//// Exemplo 3 - passando 1º, 2º e 3º parâmetro:
console.log(`\nPassando 1º, 2° e 3º parâmetro:`);
const filmes07 = ['Forrest Gump', 'Interestelar', 'Jumanji', 'Mad Max'];

// A partir do índice 2, remove 1 elemento, portanto, apenas o item de índice 2
// Feito isso, insere o elemento do 3º parâmetro
const filmesRemovidos07 = filmes07.splice(2, 1, 'Titanic');
console.log(filmesRemovidos07); // ["Jumanji"]

console.log(filmes07); // ["Forrest Gump", "Interestelar", "Titanic", "Mad Max"]

//// Exemplo 4 - passando mais parâmetros após o 3º parâmetro:o
console.log(`\nPassando mais parâmetros após o 3º parâmetro:`);
const filmes08 = ['Forrest Gump', 'Interestelar', 'Jumanji', 'Mad Max'];

// A partir do índice 2, remove 1 elemento, portanto, apenas o item de índice 2
// Feito isso, insere os elementos a partir do 3º parâmetro
// Podemos passar infinitos parâmetros que todos serão adicionados
const filmesRemovidos08 = filmes08.splice(2, 1, 'Titanic', 'Harry Potter');
console.log(filmesRemovidos08); // ["Jumanji"]

console.log(filmes08); // ["Forrest Gump", "Interestelar", "Titanic", "Harry Potter", "Mad Max" ]

/* .fill() 

É uma função que preenche todos valores do array a partir do índince inicial a um índice final. 

Esse método recebe 3 parâmetros, sendo que:
O 1º parâmetro é o valor que vai preencher a lista;
O 2º parâmetro (opcional) é o índice onde ela vai começar a substituição dos elementos;
O 3º parâmetro (opcional) é o índice que indica até onde eles devem ser substituídos (o índice passado não é afetado, ele substituiu até o anterior a ele).

*/