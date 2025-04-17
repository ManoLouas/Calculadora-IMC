function CalcularIMC() {
  let peso = parseFloat(document.getElementById("peso").value);
  let altura = parseFloat(document.getElementById("altura").value);

  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    document.getElementById("resultado").innerText = "Por favor, insira valores validos!";
    return;
  }
  let imc = peso / (altura * altura);

  let classificacao = "";
  
  if (imc < 18.5) {
    classificacao = "Abaixo do peso";
  } else if (imc >= 18.5 && imc < 24.9) {
    classificacao = "Peso Normal";
  } else if (imc >= 25 && imc < 29.9) {
    classificacao = "Sobrepesso";
  } else {
    classificacao = "Obesidade";
  }
  document.getElementById("resultado").innerText = `Seu IMC é ${imc.toFixed(2)} - ${classificacao}`;
}
