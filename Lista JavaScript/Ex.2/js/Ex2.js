// solicita um número inteiro de 1 a 10 do usuário
const num = parseInt(prompt("Digite um número inteiro de 1 a 10:"));

// verifica se o número digitado está dentro do intervalo válido
if (num < 1 || num > 10 || isNaN(num)) {
  alert("Número inválido! Digite um número inteiro de 1 a 10.");
} else {
  // calcula a tabuada do número digitado
  let tabuada = "";
  for (let i = 1; i <= 10; i++) {
    tabuada += num + " x " + i + " = " + (num * i) + "<br>";
  }

  // exibe a tabuada na janela do navegador
  document.write(tabuada);
}