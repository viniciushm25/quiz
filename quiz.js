let titulo = document.querySelector("h1")
let instrucoes = document.querySelector("#instrucoes")
let aviso = document.querySelector("#aviso")
let respostaEsta = document.querySelector("#respostaEsta")
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// PERGUNTA
let numQuestao = document.querySelector("#numero")
let pergunta = document.querySelector("#pergunta")

// ALTERNATIVAS
let a = document.querySelector("#a")
let b = document.querySelector("#b")
let c = document.querySelector("#c")

// article com a class questoes
let articleQuestoes = document.querySelector(".questoes")
// ol li com as alternativas
let alternativas = document.querySelector("#alternativas")


const q0 = {
    numQuestao : 0,
    pergunta : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    correta : "0",
}

const q1 = {
    numQuestao : 1,
    pergunta : "Covid-19 é o mesmo que:",
    alternativaA : "SARS-CoV-2",
    alternativaB : "H1N1",
    alternativaC : "Influenza",
    correta : "SARS-CoV-2",
}

const q2 = {
    numQuestao : 2,
    pergunta : "O uso do álcool em gel é essencial para a prevenção de:",
    alternativaA : "Covid-19",
    alternativaB : "Resfriado",
    alternativaC : "Câncer",
    correta : "Covid-19",
}

const q3 = {
    numQuestao : 3,
    pergunta : "Como o COVID-19 é passado ?",
    alternativaA : "Levando a mão não lava à boca e nariz",
    alternativaB : "Bebendo água não filtrada",
    alternativaC : "Outros métodos",
    correta : "Levando a mão não lava à boca e nariz",
}

const q4 = {
    numQuestao : 4,
    pergunta : "Quais são os sintomas comuns do COVID-19 ?",
    alternativaA : "Dificuldade respiratória e cansaço",
    alternativaB : "Febre",
    alternativaC : "Dor de cabeça",
    correta : "Dificuldade respiratória e cansaço",
}

const q5 = {
    numQuestao : 5,
    pergunta : "Para qual grupo o COVID-19 é mais perigoso?",
    alternativaA : "Crianças",
    alternativaB : "Idosos",
    alternativaC : "Adultos com saúde em boas condições",
    correta : "Idosos",
}

const q6 = {
    numQuestao : 6,
    pergunta : "Qual é a temperatura normal do corpo de um humano",
    alternativaA : "35 - 36°C",
    alternativaB : "36 - 37°C",
    alternativaC : "39 - 40°C",
    correta : "36 - 37°C",
}

const q7 = {
    numQuestao : 7,
    pergunta : "Pesssoas que não demonstram sintomas ao serem infectadas são chamadas de:",
    alternativaA : "Sintomático",
    alternativaB : "Assintomático",
    alternativaC : "Antipática",
    correta : "Assintomático",
}

const q8 = {
    numQuestao : 8,
    pergunta : "O vírus sai do sistema imunológico em quantos dias?",
    alternativaA : "20 - 30 dias",
    alternativaB : "10 - 20 dias",
    alternativaC : "1 - 14 dias",
    correta : "1 - 14 dias",
}

const q9 = {
    numQuestao : 9,
    pergunta : "Qual vacina é eficaz na prevenção do COVID-19",
    alternativaA : "Benzetacil",
    alternativaB : "Astrazeneca",
    alternativaC : "Rotavírus",
    correta : "Astrazeneca",
}

const q10 = {
    numQuestao : 10,
    pergunta : "Lavar às mãos te protege do COVID-19?",
    alternativaA : "Sim, mas só se lavar corretamente",
    alternativaB : "Sim, lave normalmente e use álcool em gel",
    alternativaC : "Não te progete",
    correta : "Sim, lave normalmente e use álcool em gel",
}

const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let total = document.querySelector("#total")


let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões" + totalDeQuestoes)
total.textContent = totalDeQuestoes

numQuestao.textContent = q1.numQuestao
pergunta.textContent = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC

a.setAttribute("value", "1A")
b.setAttribute("value", "1B")
c.setAttribute("value", "1C")

function proximaQuestao(nQuestao) {
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    a.setAttribute("value", nQuestao+"A")
    b.setAttribute("value", nQuestao+"B")
    c.setAttribute("value", nQuestao+"C")
}

function bloquearAlternativas() {
    a.classList.add("bloqueado")
    b.classList.add("bloqueado")
    c.classList.add("bloqueado")
}

function desbloquearAlternativas() {
    a.classList.remove("bloqueado")
    b.classList.remove("bloqueado")
    c.classList.remove("bloqueado")
}

function verificarSeAcertou(nQuestao, resposta) {
    let numeroDaQuestao = nQuestao.value
    console.log("Questão" + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    console.log("RespU" + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    console.log("RespC" + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta"
        pontos += 10
    } else{
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada"
    }

    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    bloquearAlternativas()

    setTimeout(function() {
        proxima = parseInt(numQuestao.textContent)+1

        if(proxima > totalDeQuestoes) {
            console.log("Fim do Jogo!")
            fimDoJogo()
        } else{
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

function fimDoJogo() {
    instrucoes.textContent = "Fim de Jogo!"
    numQuestao.textContent = " "

    let pont = ""
    pontos == 0 ? pont = "ponto" : pont = "pontos"
    
    pergunta.textContent = "Você conseguiu: " + pontos + "" + pont

    aviso.textContent = "Você conseguiu: " + pontos + " " + pont

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""

    a.setAttribute("value", "0")
    b.setAttribute("value", "0")
    c.setAttribute("value", "0")


    articleQuestoes.getElementsByClassName.display = "none"

    setTimeout(function() {
        pontos = 0
        location.reload();
    }, 10000)
}