let numHomens = 0;
let numMulheres = 0;

for (let i = 1; i <= 5; i++) {
  let altura = parseFloat(prompt(`Informe a altura da ${i}ª pessoa:`));
  let peso = parseFloat(prompt(`Informe o peso da ${i}ª pessoa:`));
  let sexo = prompt(`Informe o sexo da ${i}ª pessoa (M/F):`).toUpperCase();

  let imc = peso / (altura ** 2);

  if (sexo === 'M') {
    numHomens++;
    document.write(`Pessoa ${i}: sexo masculino, IMC: ${imc.toFixed(2)}<br>`);
  } else if (sexo === 'F') {
    numMulheres++;
    document.write(`Pessoa ${i}: sexo feminino, IMC: ${imc.toFixed(2)}<br>`);
  } else {
    document.write(`Sexo inválido para a pessoa ${i}.<br>`);
    continue;
  }
}

document.write(`<br>Total de homens: ${numHomens}`);
document.write(`<br>Total de mulheres: ${numMulheres}`);