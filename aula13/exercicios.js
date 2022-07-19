console.clear();
const prompt = require('prompt-sync')();
//=== Exercícios de Fixação ===\\

/**
    1) Crie um objeto pessoa com os atributos: nome, idade, peso e altura. Além disso, ela deve ter os métodos: envelhecer, engordar, emagrecer, crescer. Por padrão, a cada ano que nossa pessoa envelhece até os 21 anos, ela deve crescer 0,5 cm. Crie um método bio que retorna uma string com todas as informações da pessoa.
    
    2) Crie um sistema de cadastro de funcionários que deve criar um objeto novo para cada funcionário cadastrado com as informações: nome, cargo e salário. Ele deve armazenar todos esses objetos em uma lista. Ao final de cada cadastro ele deve perguntar se deseja cadastrar um novo funcionário e recomeçar o processo, e caso não haja mais funcionários para cadastrar, ele deve chamar uma função que deve apresentar a quantidade de funcionários com cada cargo e os nomes deles. (Você pode limitar as opções de cargo para facilitar.)
    
    3) Implementando o exercício anterior, escreva uma função que deve calcular um aumento de salário baseado no cargo. Ela deve receber como argumento o cargo que receberá o aumento, e a taxa que ele irá aumentar. Após isso, aplique esse aumento a todos os funcionários daquele cargo e exiba o valor dos novos salários.
    
    4) Faça um programa de agenda telefônica que deve ter as funções: adicionar, alterar, deletar e consultar.

        * Ao adicionar um novo contato, ele deve criar um objeto com os atributos nome e telefone, e adicionar esse objeto a uma lista com todos os contatos.

        * Ao alterar, ele deve receber o nome do contato a ser alterado e o novo telefone. Exiba uma mensagem de erro caso o contato não exista.

        * Ao deletar, ele deve apagar o objeto com o nome passado.

        * Ao consultar, ele deve receber um nome e procurar esse contato na agenda exibindo o número. Exiba uma mensagem de erro caso o contato não exista.

 
 */

// const pessoa = {
//     nome: 'Gabriel',
//     idade: 20,
//     cidade: 'Londrina',
// };

// for (let i in pessoa) {
//     console.log(`${i}: ${pessoa[i]}`);
// }

//// 2)

const funcionarios = [];

function adicionarFuncionario() {
    const funcionario = {};
    funcionario.nome = prompt('Qual o nome do funcionário?');
    funcionario.cargo = prompt('Qual o cargo do funcionário?');
    funcionario.salario = +prompt('Qual o salário do funcionário?');
    funcionarios.push(funcionario);
}

function contarCargo(array, cargo) {
    let arrayTemporario = [];

    array.forEach(elementoArray => {
        // Checar se há algum objeto no arrayTemporario que contenha chabe e valor
        //array.some() testa se pelo mesnos um do elementos no array passa no teste e retorna um booleano (tru ou false)
        if
    });
}

while (true) {
    adicionarFuncionario();
    console.log('Deseja adicionar um novo funcionário? 1 - SIM | 2 - Não:');
    const pergunta = +prompt();
    if (pergunta === 2) {
        break;
    }
}
