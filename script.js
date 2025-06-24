const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
                enunciado: "Você recebe um convite para participar de um projeto inovador que usa tecnologia para melhorar a vida das pessoas. O que você sente na hora?",
        alternativas: [
            {
                texto: "Curiosidade, quero entender como posso ajudar e aprender algo novo",
                afirmacao: "Abriu a mente para oportunidades e tem sede de conhecimento. "
            },
            {
                texto: "Cautela, prefiro entender todos os detalhes antes de me envolver.",
                afirmacao: "Valoriza o planejamento e prefere agir com segurança."
            }
        ]
    },
    {
        enunciado: "Durante o projeto, você percebe que o grupo tem opiniões diferentes sobre o uso da tecnologia. Como você age?",
        alternativas: [
            {
                texto: "Procuro ouvir todos, buscar um meio-termo e manter o time unido.",
                afirmacao: "Tem espírito de liderança e sabe que o diálogo constrói soluções."
            },
            {
                texto: "Defendo minha ideia com argumentos claros e respeito as opiniões contrárias.",
                afirmacao: "É firme e transparente, sabe defender suas convicções com respeito."
            }
        ]
    },
    {
        enunciado: "No fim do projeto, você deve apresentar os resultados para a comunidade. Como prepara essa apresentação?",
        alternativas: [
            {
                texto: "Faço algo simples, claro e que todos possam entender facilmente.",
                afirmacao: "Valoriza a comunicação acessível e inclusiva."
            },
            {
                texto: "Incluo dados e conceitos mais técnicos para mostrar o quão profundo foi o trabalho.",
                afirmacao: "Prefere mostrar a complexidade e o rigor do projeto."
            }
        ]
    },
    {
        enunciado: "Depois de tudo, como você avalia sua participação no projeto?",
        alternativas: [
            {
                texto: "Sinto que cresci, aprendi a trabalhar em equipe e a lidar com desafios.",
                afirmacao: "Reconhece o valor do aprendizado e do desenvolvimento pessoal."
            },
            {
                texto: "Acho que poderia ter me dedicado mais, mas foi uma experiência interessante.",
                afirmacao: "Tem autocrítica e está aberto a melhorar para o futuro"
            }
        ]
    },
    {
        enunciado: "Durante a execução de um projeto, um imprevisto faz com que metade do trabalho precise ser refeito em pouco tempo. Como você reage?",
        alternativas: [
            {
                texto: "Chamo o grupo, proponho uma força-tarefa e tento motivar todos para recuperar o tempo perdido.",
                afirmacao: "Demonstrou resiliência e capacidade de engajar o time em momentos de crise."
            },
            {
                texto: "Analiso o que pode ser recuperado, foco nas prioridades e organizo o que for possível dentro do prazo.",
                afirmacao: "Mostrou foco estratégico e capacidade de tomar decisões rápidas sob pressão."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Seu perfil no trabalho em equipe é:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();