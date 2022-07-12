console.clear();
const prompt = require('prompt-sync')();

/*

    O programa deve:

        Receber votos até que o usuário diga que não tem mais ninguém para votar;
        
        Ter uma função chamada autorizaVoto (anoNascimento) retornando: “Negado”, “Opcional” ou “Obrigatório”;
        
        Ter uma função chamada votação (autorização, voto) que valida e contabiliza o voto (número entre 1 e 5) ou retorna a mensagem: “Você não pode votar”, caso o voto não possa ser contabilizado;
        
        Contabilizar os votos conforme os significados:
        1 = Candidato 1
        2 = Candidato 2
        3 = Candidato 3
        4 = Voto Nulo
        5 = Voto em Branco
        
        Ter uma função chamada exibirResultados() que deve mostrar:
        
        O total de votos para cada candidato
        
        O total de votos nulos
        
        O total de votos em branco
        
        Qual candidato venceu a votação

*/

let c1 = 0;
let c2 = 0;
let c3 = 0;
let votoNulo = 0;
let votoBranco = 0;
let anoNascimento = +prompt('Qual o seu ano de nascimento:');

function autorizaVoto(anoNascimento) {
    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - anoNascimento;

    if (idade < 16) {
        return 'Negado';
    } else if (idade < 18 || idade > 60) {
        return 'Opcional';
    } else {
        return 'Obrigatório';
    }
}

const autorizacao = autorizaVoto(anoNascimento);

function votacao(autorizacao, voto) {
    if (autorizaVoto === 'Negado!') {
        console.log('Desculpa, mas você não pode votar!');
    }
}
