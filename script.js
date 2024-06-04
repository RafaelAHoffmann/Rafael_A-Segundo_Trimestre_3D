const
caixaPrincipal = document.querySelector(".caixa-principal"),
caixaPerguntas = document.querySelector(".caixa-perguntas"),
caixaAlternativas = document.querySelector(".caixa-alternativas"),
caixaResultado = document.querySelector(".caixa-resultado"),
textoResultado = document.querySelector(".texto-resultado"),

perguntas = [
    {
        enunciado:"Quando o império tibetano caiu?",
        alternativas: [
            "840. d.C",
            "480. d.C",
        ]
    },
    {
        enunciado:"Quem matou Hitler?",
        alternativas: [
            "Adolf",
            "Meu avô",
        ]
    },
    {
        enunciado:"Qual o motivo da fome em massa ukraniana, Holodomor?",
        alternativas: [
            "Nunca aconteceu",
            "Eles mereceram",
        ]
    },
    {
        enunciado:"Kendrik ou Drake",
        alternativas: [
            "Kendrik (correto)",
            "Drake (errado)",
        ]
    },
    {
        enunciado:"Complete a frase: 'Skibidi...' ",
        alternativas: [
            "toilet.",
            "dop dop yes yes",
        ]
    },
];

let
atual = 0,
perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado
}

function mostraAlternativas(){
    for(const alternativas of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();