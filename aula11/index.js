console.clear();
const prompt = require('prompt-sync')();

/** Funções:
 
    * A declaração function define uma função com os especificados parâmetros. É um conjunto de instruções que executa uma tarefa ou calcula um valor. Para usar uma função, você deve defini-la em algum lugar no escopo do qual você quiser chamá-la.

    É como se ensinássemos para o computador uma série de comandos que queremos executar chamando apenas por um nome. Isso é muito útil quando precisamos executar um certo código várias vezes durante a execução do nosso programa, então ao invés de repetir várias vezes esses códigos, criamos uma função para facilitar.

    Para que ele execute os comandos, é necessário chamar a função, e fazemos isso apenas pelo nome dela seguido de ().

 */

//// Exemplo 01:

console.log(`\nExemplo 01`);
function saudacao() {
    console.log('Seja bem vindo(a) Bluemer!');
    console.log('Essa é a aula 11 do nosso curso.');
    console.log();
}

saudacao();

