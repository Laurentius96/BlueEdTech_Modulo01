/** Início:
 
  * JavaScript:

    1) É uma linguagem leve;
    2) Interpretada;
    3) Baseada em objetos com funções de primeira classe;
    4) Os tipos de dados das variáveis não precisam ser declarados (tipagem dinâmica);
    5) Mais conhecida como a linguagem de script para páginas Web, mas usada também em vários outros ambientes sem browser, como node.js
  
 * IDE:
    É um pacote de software que consolida as ferramentas básicas necessárias para escrever e testar softwares.

 * NodeJS:
   
   É como um motor que interpreta a linguagem JavaScript e a executa;
 
 * npm:

   Node package manager - Gerência os porjetos no geral.

    * Package.json:

      Coração de um projeto Node.

      * index.js:

      Executa o que foi passando para o Node.

 */

console.log("Hello, world!");
console.log();// Esse console.log() vazio serve apenas para 'pular uma linha' e melhorar a visualização da saída


/* Variaáveis:

  Uma variável é um espaço na memória do computador capaz de armazenar um valor;
    
  Uma variável pode armazenar qualquer tipo de informação, um texto, um número, um booleano, ou até mesmo uma lista com vários valore.

  * Declarando uma variável:

    Para declarar, ou criar uma variável em JavaScript, nós precisamos determinar se ela será uma:
    
    1°) var (variável de escopo global, que pode ser acessada de qualquer local.);
    
    2°) let (variável de escopo local, que só pode ser usada no espaço onde foi criada.);
    
    3°) const (constante, também de escopo local. Seu valor não pode ser alterado e ela não pode ser redeclarada.)
    
*/

let variavel = 'Blue';
console.log(variavel);

meuNome = 'Lorenzo'
console.log(meuNome);
console.log();

/* Tipos de variáveis:

  * String: é uma sequência de caracteres, utilizado para textos. Uma string precisa ter seu valor envolvido em aspas;

  * Number: é um número. Esse número pode ser inteiro ou decimal;
  
  * Boolean: é um objeto que pode armazenar o valor de verdadeiro __ ou falso. Falaremos dele mais tarde.

*/

const texto = "Texto Texto"; // String
const numero = 1; // Number
const numeroDecimal = 1.5;  // Number
const verdadeiro = true // Boolean

console.log("texto", texto, typeof texto);
console.log("numero", numero, typeof numero);
console.log("numeroDecimal", numeroDecimal, typeof numeroDecimal);
console.log("verdadeiro", verdadeiro, typeof verdadeiro);
console.log();

/* Prompt: https://www.npmjs.com/package/prompt-sync

 Copiar: const prompt = require('prompt-sync')();

 O comando prompt pode ser usado para obter alguma informação do usuário. Com isso é possível interagir com quem está usando o seu programa para receber informações;

 Podemos combinar o uso de um prompt com uma variável, para armazenar a informação do meu usuário!

*/

  const prompt = require('prompt-sync')();

  const nome = prompt('Qual é o seu nome? ');
  console.log('Olá, ' + nome); // Observe que usamos o sinal de + para juntar uma string e uma variável
  console.log();

  // OBS-01: Quando utilizamos o comando prompt, por padrão a informação é armazenada no formato de string, mesmo que o usuário informe um número.

    const n = prompt('Digite um número: ');
    console.log(`O número digitado foi: ${n}`); // Outra forma de colocar uma variável junto de uma string - Template strings

    console.log("O número digitado é uma: " + typeof(n)); // typeof nos mostra qual o tipo da variável armazenada.
    console.log();

  // OBS-02: Observe que mesmo digitando um número, ele é armazenado como string, como se fosse um texto, com isso não conseguimos fazer operações com esse número. Para que o valor seja armazenado como number, usamos o comando "+prompt" | parseInt() - inteiro | parseFloat() - decimal . 
  
    const num = +prompt('Digite um número '); 
    console.log('O número digitado foi: '+ num);
    console.log("O número digitado agora é: " + typeof(num));
    console.log();
  
    
/* Operadores:
  
  * Adição: +
  * Subtração: -
  * Multiplcação: *
  * Divisão: /
  * Resto: %
  * Exponenciação: **   
 
 */

  const num1 = +prompt('Digite um número: ');
  const num2 = +prompt('Digite outro número: ');

  console.log(`Subtração: ${num1} - ${num2} = ${num1 - num2}`);
  console.log(`Multiplicação: ${num1} * ${num2} = ${num1 * num2}`);
  console.log(`Divisão: ${num1} / ${num2} = ${num1 / num2}`);
  console.log(`Resto da divisão de ${num1}/${num2}: ${num1 % num2}`);
  console.log(`Resultado de ${num1} elevado a ${num2}: ${num1 ** num2}`);