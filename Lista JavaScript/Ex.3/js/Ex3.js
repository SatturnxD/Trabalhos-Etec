let total = 1;

for (let i = 1; i <= 500; i++) {
  total *= i;
}

if (Number.isFinite(total)) {
  alert("O total é: " + total);
} else {
  alert("O total é muito grande para ser representado como um número.");
}

document.write("O resultado total é muito grande para ser representado como um número.");