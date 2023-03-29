const fs = require('fs');

const dadosFaturamento = JSON.parse(fs.readFileSync('fat.json', 'utf-8'));

let menorFaturamento = dadosFaturamento[0].valor;
let maiorFaturamento = dadosFaturamento[0].valor;

let somaFaturamento = 0;
let numDiasFaturamento = 0;

for (let i = 0; i < dadosFaturamento.length; i++) {
  const faturamentoDia = dadosFaturamento[i].valor;
  if (faturamentoDia < menorFaturamento)
    menorFaturamento = faturamentoDia;
  if (faturamentoDia > maiorFaturamento) 
    maiorFaturamento = faturamentoDia;
  if (dadosFaturamento.length == i + 1){
    console.log(`\n\nMenor valor de faturamento: ${menorFaturamento}`);
    console.log(`Maior valor de faturamento: ${maiorFaturamento}`);
  }
}

for (let i = 0; i < dadosFaturamento.length; i++) {
  const faturamentoDia = dadosFaturamento[i].valor;
  if (faturamentoDia > 0) {
    somaFaturamento += faturamentoDia;
    numDiasFaturamento++;
  }
}

const mediaFaturamento = somaFaturamento / numDiasFaturamento;

let numDiasAcimaMedia = 0;
for (let i = 0; i < dadosFaturamento.length; i++) {
  const faturamentoDia = dadosFaturamento[i].valor;
  if (faturamentoDia > mediaFaturamento) {
    numDiasAcimaMedia++;
  }
}

console.log(`Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: ${numDiasAcimaMedia}\n\n`);
