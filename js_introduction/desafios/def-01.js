const num1 = parseFloat(prompt("Digite o primeiro número:"));
const num2 = parseFloat(prompt("Digite o segundo número:"));

const soma = num1 + num2;
const subtracao = num1 - num2;
const multiplicacao = num1 * num2;
const divisao = num2 !== 0 ? (num1 / num2).toFixed(2) : "Divisão por zero não permitida";
const restoDivisao = num2 !== 0 ? num1 % num2 : "Não é possível calcular o resto com divisor zero";

const somaPar = soma % 2 === 0 ? "par" : "ímpar";

const iguais = num1 === num2 ? "iguais" : "diferentes";

alert(`
Resultados:
- A soma dos dois números é ${soma} e é ${somaPar}.
- A subtração dos dois números é ${subtracao}.
- A multiplicação dos dois números é ${multiplicacao}.
- A divisão dos dois números é ${divisao}.
- O resto da divisão dos dois números é ${restoDivisao}.
- Os números inseridos são ${iguais}.
`);
