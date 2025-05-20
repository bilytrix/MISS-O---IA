const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
  {
    enunciado: "Quais os principais autores do Barroco no Brasil?",
    alternativas: ["Gregório de Matos", "Bento Teixeira e Manuel Botelho de Oliveira"],
  },
  {
    enunciado: "Quais os países que têm a maior e a menor expectativa de vida do mundo?",
    alternativas: ["Japão", "Serra Leoa"],
     },
  {
    enunciado: "Quais as duas datas que são comemoradas em novembro?",
    alternativas: ["Proclamação da República", "Dia Nacional da Consciência Negra"],
     },
  {
    enunciado: "Qual a altura da rede de vôlei nos jogos masculino e feminino?",
    alternativas: ["2,43", "2,24"],
     },
  {
    enunciado: "Normalmente, quantos litros de sangue uma pessoa tem? Em média, quantos são retirados numa doação de sangue?",
    alternativas: ["Entre 4 a 6 litros", "São retirados 450 mililitros"],
  },
];