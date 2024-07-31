const
    caixaPrincipal     =  document.querySelector(".caixa-principal"),
    caixaPerguntas     =  document.querySelector(".caixa-perguntas"),
    caixaAlternativas  =  document.querySelector(".caixa-alternativas"),
    caixaResultado     =  document.querySelector(".caixa-resultado"),
    textoResultado     =  document.querySelector(".texto-resultado"),

perguntas = [
    {
        enunciado:"1",
        alternativas: [
            {
                texto: "a",
                afirmacao:"afirmação",
            },
            {
                texto: "b",
                afirmacao:"afirmação",
            }
        ]
    },
    {
        enunciado:"",
        alternativas: [
            {
                texto: "",
                afirmacao:"afirmação",
            },
            {
                texto: "",
                afirmacao:"afirmação",
            }
        ]
    },
    {
        enunciado:"",
        alternativas: [
            {
                texto: "",
                afirmacao:"afirmação",
            },
            {
                texto: "",
                afirmacao:"afirmação",
            }
        ]
    },
    {
        enunciado:"",
        alternativas: [
            {
                texto: "",
                afirmacao:"afirmação",
            },
            {
                texto: "",
                afirmacao:"afirmação",
            }
        ]
    },
    {
        enunciado:"",
        alternativas: [
            {
                texto: "",
                afirmacao:"afirmação",
            },
            {
                texto: "",
                afirmacao:"afirmação",
            }
        ]
    },
];

let
    atual = 0,
    perguntaAtual,
    historiaFinal = "";

function
mostraPergunta()
{
    if(atual >= perguntas.length)
    {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function
mostraAlternativas()
{
    for(const alternativas of perguntaAtual.alternativas)
    {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function
respostaSelecionada(opcaoSelecionada)
{
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function
mostraResultado
{
    caixaPerguntas.textContent = "Esse texto é a introdução para juntar todas as afirmações das respostas...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();