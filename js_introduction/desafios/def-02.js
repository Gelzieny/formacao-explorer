// link da doc. desafio https://efficient-sloth-d85.notion.site/Exerc-cio-02-41080263d073491a908e37c6e4145361

const estudantes = [
  { nome: "João", nota1: 8, nota2: 7 },
  { nome: "Maria", nota1: 6, nota2: 5 },
  { nome: "Ana", nota1: 9, nota2: 10 },
  { nome: "Pedro", nota1: 4, nota2: 6 },
];

function calcularMedia(nota1, nota2) {
  return (nota1 + nota2) / 2;
}

function verificarAprovacao(estudante) {
  const media = calcularMedia(estudante.nota1, estudante.nota2);
  const aprovado = media >= 7;
  return aprovado
    ? `Parabéns, ${estudante.nome}! Você foi aprovado(a) com média ${media.toFixed(2)}.`
    : `Que pena, ${estudante.nome}. Você não atingiu a média necessária (7). Sua média foi ${media.toFixed(2)}.`;
}

estudantes.forEach((estudante) => {
  const mensagem = verificarAprovacao(estudante);
  alert(mensagem);
});

