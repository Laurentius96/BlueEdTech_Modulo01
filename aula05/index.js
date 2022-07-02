const prompt = require('prompt-sync')();

/** Estruturas de repetição:
 
  * While:

    - Quanado sabemos a quantidade de vezes que iremos executar!*

    A declaração while cria um laço que executa uma rotina especifica enquanto a condição de teste for avaliada como verdadeira (true). A condição é avaliada antes da execução da rotina.

    A condição é testada e, caso verdadeira, irá para a execução do código (passo 2 na imagem).
        
        1) Depois de validada a condição como sendo true, a declaração é executada.
        2) Quando a condição retorna false, a declaração é ignorada.
    
    A sintaxe é bastante simples, semelhante ao que vimos no if:
    

 */

let num = 0;

while (num <= 5) {
    console.log(num);
    num++; // += 2, +=3...
}
console.log();

// O while pode ser muito útil quando precisamos fazer algum tipo de validação:

let texte01 = 0;

while (texte01 <= 10) {
    texte01 = prompt('Digite um número maior que 10: ');
}
console.log();

// exemplo de um validação
let resposta = prompt('Digite sua resposta:').toLowerCase().trim();
while (resposta !== 'sim' || resposta !== 'nao') {
    console.log('\nResposta Inválida!');
    resposta
}
console.log();
console.log(`Resposta Correta!`);

/** Do... while:
 
  * While:

    - 

    A declaração do...while cria um laço que executa uma trecho de código até que o resultado da condição seja igual a false. A diferença é que a condição é avaliada depois que o bloco de código é executado, resultando que uma declaração seja executada pelo menos uma vez.

    Primeiro o código é executado, antes de avaliar a condição
        
        1) Depois da execução a condição é avaliada, caso true volta para o passo 1, caso false encerra a repetição.

        2) A execução do laço é encerrada ao avaliar a condição como false.
    
    Essa estrutura é especialmente útil quando temos um código que precisa ser executado pelo menos uma vez, independente do resultado da condição:
    

 */

let senha = '';

do {
    senha = prompt('Digite a senha de acesso: ');
} while (senha !== 'Blue');
