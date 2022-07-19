console.clear();
const prompt = require('prompt-sync')();
const { resolve } = require('path');

// function job() {
//     return new Promise(function (resolver, reject) {
//         reject();
//     });
// }

// let promise = job();

// promise // só depois que  dá um resolver
//     .then(function () {
//         console.log('Success 1');
//     })

//     .then(function () {
//         console.log('Success 2');
//     })

//     .then(function () {
//         console.log('Success 3');
//     })
//     // carch tratao quando o reject é acinado
//     .catch(function () {
//         console.log('Erro 1');
//     })
//     // depois que o reject é 'tratado' retornado, o proximo then é acionado
//     .then(function () {
//         console.log('Successo 4');
//     });

function job(state) {
    return new Promise(function (resolver, reject) {
        if (state) {
            resolve('success');
        } else {
            reject('error');
        }
    });
}

let promise = job(true);

promise
    .then(function (data) {
        console.log(data);
        return job(false);
    })

    .catch(function (error) {
        console.log(error);
        return 'Error caught';
    })

    .then(function (data) {
        console.log(data);
        return job(true);
    })
    .catch(function (error) {
        console.log(error);
    });
