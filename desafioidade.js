function calculaIdade (anoNasc) {
  return 2022 - anoNasc;
}
module.exports.calculaIdade = calculaIMC;

function calculaIMC (peso, altura) {
  return peso / (altura * altura)
}
module.exports.calculaIMC = calculaIMC