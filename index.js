// const fs = require('fs/promises');

// const conteudo = fs.readFile('./arquivo.txt')
// .then((conteudo) => console.log (conteudo))
// .catch ((erro) => console.log ('deu ruim'))

// console.log('teste depois da leitura')

// function criarCartao(nome) {
//     return new Promise(async (reject, resolve) => {
//       if (nome == 'vinicius') {
//         return reject('Nome não é permitido');
//       }
  
//       await fs.appendFile('cartao-visita.txt', `Olá meu nome é ${nome}`);
//       resolve();
//     });
//   }
  
//   criarCartao('Vinicius');

const fs = require('fs/promises');

function sum (numb1, numb2) {
    return new Promise ((resolve, reject) => {
        const resultSum = numb1 + numb2;
        if (typeof numb1!== 'number' || typeof numb2!== 'number') {
            return reject('Não são números!');
        }
        fs.appendFile('resultado.txt', `A soma entre ${numb1} e ${numb2} é: ${numb1 + numb2} \n`);
        resolve(resultSum);
    })
}

sum(23, 32)
.then((result) => console.log(result))
.catch((error) => console.log(error));

sum(7, 16)
.then((result) => console.log(result))
.catch((error) => console.log(error));