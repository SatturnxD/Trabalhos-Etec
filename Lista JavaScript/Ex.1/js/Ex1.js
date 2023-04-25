// Define uma variável para armazenar o número atual
let num = 0;

// Cria um loop que executa enquanto o número atual for menor que 100
while (num < 100) {
  // Verifica se o número atual é par
  if (num % 2 === 0) {
    // Se o número atual for par, exibe-o na janela do navegador
    document.write('Número ', num, '<br>');
  }

  // Incrementa o número atual para o próximo número
  num++;
}