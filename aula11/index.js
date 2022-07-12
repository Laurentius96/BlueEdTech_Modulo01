console.clear();
const prompt = require('prompt-sync')();

/** Funções:
 
    * A declaração function define uma função com os especificados parâmetros. É um conjunto de instruções que executa uma tarefa ou calcula um valor. Para usar uma função, você deve defini-la em algum lugar no escopo do qual você quiser chamá-la.

    É como se ensinássemos para o computador uma série de comandos que queremos executar chamando apenas por um nome. Isso é muito útil quando precisamos executar um certo código várias vezes durante a execução do nosso programa, então ao invés de repetir várias vezes esses códigos, criamos uma função para facilitar.

    Para que ele execute os comandos, é necessário chamar a função, e fazemos isso apenas pelo nome dela seguido de ().

 */

//// Exemplo 01:

console.log(`\nExemplo 01`);
function saudacao01() {
    console.log('Seja bem vindo(a) Bluemer!');
    console.log('Essa é a aula 11 do nosso curso.');
    console.log();
}

saudacao01();

//// Dentro de uma função eu posso usar qualquer estrutura que aprendemos até agora (prompt, if, while, for...)

console.log(`\nExemplo 02`);
function saudacao02() {
    const nome = prompt('Qual o seu nome? ');
    const idade = prompt('Qual a sua idade? ');

    console.log();
    console.log(`Seja bem vindo(a) ${nome}!`);

    if (idade >= 18) {
        console.log('Você é maior de idade');
    } else {
        console.log('Você é menor de idade');
    }

    console.log();
}

saudacao02();

/** Parâmetros em uma função:
 
 * Uma função pode receber parâmetros na forma de argumentos, isso é, valores que serão passados para “dentro” da função que podem ser usados por ela para a execução do código.
 
 */

console.log(`\nExemplo 03`);
function saudacao(nome, anoNascimento) {
    const anoAtual = 2022;
    const idade = anoAtual - anoNascimento;

    console.log();
    console.log(`Seja bem vindo(a) ${nome}!`);

    if (idade >= 18) {
        console.log('Você é maior de idade');
    } else {
        console.log('Você é menor de idade');
    }

    console.log();
}

const nomeDigitado = prompt('Qual o seu nome? ');
const nascimentoDigitado = prompt('Qual o seu ano de nascimento? ');

saudacao(nomeDigitado, nascimentoDigitado);

/** Os parâmetros predefinidos:
 
 * Os parâmetros predefinidos de uma função permitem que parâmetros regulares sejam inicializados com valores iniciais caso nenhum valor seja passado. Ou seja, ao 'chamar' a função, caso o parâmetro não seja passado como argumento, ela assumirá o valor padrão que foi definido na sua declaração.
 
*/

console.log(`\nExemplo 04`);
function saudacao04(anoNascimento, nome = 'Aluno(a)') {
    const anoAtual = 2022;
    const idade = anoAtual - anoNascimento;

    console.log();
    console.log(`Seja bem vindo(a) ${nome}!`);

    if (idade >= 18) {
        console.log('Você é maior de idade');
    } else {
        console.log('Você é menor de idade');
    }

    console.log();
}

const nascimentoDigitado04 = prompt('Qual o seu ano de nascimento? ');
const nomeDigitado04 = prompt(
    'Qual o seu nome (deixe em branco, caso queira)? ',
);

saudacao04(nascimentoDigitado04, nomeDigitado04);

/** Rotorno:
     
    * As variáveis definidas no interior de uma função não podem ser acessadas de nenhum lugar fora da função, porque a variável está definida apenas no escopo da função. Portanto, no exemplo da função abaixo, ela irá somar os números, apresentar na tela, mas eu não conseguirei acessar esse resultado de nenhum lugar fora da função, então além da exibição, esse valor se torna 'inútil' para mim, pois eu não consigo armazená-lo em nenhum outro lugar ou fazer qualquer outro cálculo com ele.
  
*/

console.log(`\nExemplo 05`);
function somar(a, b) {
    const soma = a + b;
    console.log(soma);
}

const resultado = somar(15, 20);

console.log();
console.log(resultado);

//// Por padrão, uma função retorna sempre undefined, ou seja, ela irá executar todas as declarações de dentro dela e não irá retornar nenhum valor após isso. Caso queira que ao final da execução a função 'devolva' um valor, como um resultado, podemos usar a instrução return.

console.log(`\nExemplo 06`);
function somar06(a, b) {
    const soma = a + b;
    return soma;
}

const resultado06 = somar06(15, 20);

console.log(resultado06);

/*

    Veja que a variável resultado recebeu o valor da função somar, com os argumentos 15 e 20. Caso a função não tivesse um return, resultado receberia 'undefined', mas como definimos que a função deve retornar a variável soma (que por sua vez recebeu a soma dos argumentos na função), resultado recebeu o valor de soma, que nesse caso é 35.

    Uma função pode retornar qualquer tipo de valor (uma string, um número, uma lista ou até mesmo uma função!), mas ela poderá retornar apenas um valor.

*/
