const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite um número: ", function(numero) {
  numero = parseInt(numero);
  let anterior = 0;
  let atual = 1;
  let proximo = 0;

  while (proximo < numero) {
    proximo = anterior + atual;
    anterior = atual;
    atual = proximo;
  }

  if (proximo === numero) {
    console.log(numero + " pertence à sequência de Fibonacci.");
  } else {
    console.log(numero + " não pertence à sequência de Fibonacci.");
  }

  rl.close();
});
