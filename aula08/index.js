console.clear();
const prompt = require('prompt-sync')();

/** Laço de repetição FOR:
 
  * Uma expressão do tipo for cria um loop que vai repetir uma declaração por uma quantidade (geralmente) fixa de vezes.

  As três principais formas de utilização do for são o for (também conhecido como for indexado) o for of e o for in.

 */

/* FOR indexado:

  Para criar um for indexado, devemos informar três partes importantes:

    * Expressão de inicialização (geralmente utilizada para declarar uma variável __ de controle);

    * Condição para continuar a execução;

    * Expressão executada após cada etapa de execução (geralmente consiste em uma operação que incrementa a variável de controle).

  O for a seguir pode ser lido da seguinte maneira:

    * Para uma variável i com valor inicial 0, executaremos o bloco de código dentro de { } enquanto a condição i < 10 for verdadeira, ou seja, enquanto o valor de i for menor que 10;

    * Ao final de cada execução do bloco de código, executamos a operação i++, que soma 1 ao valor atual de i, fazendo com que esse valor sempre aumente;

    * Após a operação de alterar o valor de i, validamos se a condição i < 10 continua verdadeira;

      ** Caso positivo, executamos bloco de código mais uma vez;

      ** Caso seja falsa, encerramos a execução do for e avançamos para a próxima linha após o for.

*/

//// Exemplo 01:
console.log('\nFOR indexado - Exemplo 01:');
for (let i = 0; i < 10; i++) {
    console.log('Isso é uma repetição!');
}

/* 

  Uma outra forma de ler o for é da seguinte maneira:

    1. A variável de controle é inicializada;
    2. A condição é avaliada (caso verdadeira executa a etapa 3, caso falsa pula para a 5);
    3. Caso a condição seja verdadeira, a declaração será executada;
    4. Após a execução, a expressão final é executada (incremento do controle);
    5. Caso a condição (etapa 2) seja falsa, a execução do for termina e o código segue em frente;

  A cada execução a variável de controle é incrementada, e podemos verificar isso facilmente:

*/

console.log('\nFOR indexado - Exemplo 02:');
for (let i = 0; i < 10; i++) {
  console.log(i);
}

/*

As 3 expressões do FOR são opcionais, você pode não usar a expressão de inicialização, não testar uma condição, e não executar uma declaração final.

*/

// Usando for sem inicializar a variável de controle (ela é declarada antes)
console.log('\nFOR indexado - Exemplo 03:');
let j = 0;

for ( ; j < 9; j++) {
  console.log(j);
}

// Usando for sem testar uma condição (é necessário usar um break para não entrar em loop infinito)
console.log('\nFOR indexado - Exemplo 04:');
for (let i = 0; ; i++) {
  console.log(i);
  
  if (i > 3) {
    break;
  }
}

// Usando for sem incremento no final (o incremento é feito na execução do código)
console.log('\nFOR indexado - Exemplo 05:');
for (let i = 0; i < 9; ) {
  console.log(i);
  
  i++;
}

// Usando for sem nenhuma expressão
console.log('\nFOR indexado - Exemplo 06:');
let i = 0;

for ( ; ; ) {
  if (i > 3) {
    break;
  }
 
    console.log(i);

    i++;
}