let allVerses = [

    {
        verse: "No princípio criou Deus os céus e a terra.",
        options: ["Gênesis 1:1", "João 1:1", "Hebreus 1:1"],
        answer: "Gênesis 1:1"
    },

    {
        verse: "Eu sou o caminho, a verdade e a vida. Ninguém vem ao Pai, a não ser por mim.",
        options: ["João 14:6", "João 3:16", "Mateus 7:13"],
        answer: "João 14:6"
    },

    {
        verse: "O Senhor é o meu pastor; nada me faltará.",
        options: ["Salmos 23:1", "Salmos 91:1", "Provérbios 3:5"],
        answer: "Salmos 23:1"
    },

    {
        verse: "Posso todas as coisas naquele que me fortalece.",
        options: ["Filipenses 4:13", "Romanos 8:28", "2 Coríntios 5:7"],
        answer: "Filipenses 4:13"
    },

    {
        verse: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo o que nele crê não pereça, mas tenha a vida eterna.",
        options: ["João 3:16", "1 João 4:8", "Romanos 5:8"],
        answer: "João 3:16"
    },

    {
        verse: "Entrega o teu caminho ao Senhor; confia nele, e ele tudo fará.",
        options: ["Salmos 37:5", "Salmos 23:4", "Provérbios 16:3"],
        answer: "Salmos 37:5"
    },

    {
        verse: "Buscai primeiro o Reino de Deus, e a sua justiça, e todas estas coisas vos serão acrescentadas.",
        options: ["Mateus 6:33", "Lucas 6:38", "Hebreus 11:1"],
        answer: "Mateus 6:33"
    },

    {
        verse: "Tudo tem o seu tempo determinado, e há tempo para todo propósito debaixo do céu.",
        options: ["Eclesiastes 3:1", "Salmos 1:1", "Provérbios 1:7"],
        answer: "Eclesiastes 3:1"
    },

    {
        verse: "O coração alegre é bom remédio, mas o espírito abatido seca os ossos.",
        options: ["Provérbios 17:22", "Provérbios 17:17", "Salmos 30:5"],
        answer: "Provérbios 17:22"
    },

    {
        verse: "Se Deus é por nós, quem será contra nós?",
        options: ["Romanos 8:31", "Romanos 12:2", "Hebreus 13:8"],
        answer: "Romanos 8:31"
    },

    {
        verse: "A fé é a certeza daquilo que esperamos e a prova das coisas que não vemos.",
        options: ["Hebreus 11:1", "2 Coríntios 5:7", "Tiago 2:17"],
        answer: "Hebreus 11:1"
    },

    {
        verse: "O choro pode durar uma noite, mas a alegria vem pela manhã.",
        options: ["Salmos 30:5", "Salmos 91:7", "Isaías 40:31"],
        answer: "Salmos 30:5"
    },

    {
        verse: "Não temas, porque eu sou contigo; não te assombres, porque eu sou o teu Deus.",
        options: ["Isaías 41:10", "Josué 1:9", "Salmos 46:1"],
        answer: "Isaías 41:10"
    },

    {
        verse: "Esforça-te e tem bom ânimo; não temas, nem te espantes, porque o Senhor teu Deus é contigo por onde quer que andares.",
        options: ["Josué 1:9", "Deuteronômio 6:5", "Salmos 121:1"],
        answer: "Josué 1:9"
    },

    {
        verse: "O amor é paciente, o amor é bondoso. Não inveja, não se vangloria, não se orgulha.",
        options: ["1 Coríntios 13:4", "1 João 4:7", "Efésios 4:2"],
        answer: "1 Coríntios 13:4"
    },

    {
        verse: "Lâmpada para os meus pés é a tua palavra, e luz para o meu caminho.",
        options: ["Salmos 119:105", "Salmos 19:1", "Provérbios 3:6"],
        answer: "Salmos 119:105"
    },

    {
        verse: "O Senhor é a minha luz e a minha salvação; a quem temerei?",
        options: ["Salmos 27:1", "Salmos 121:1", "Isaías 9:2"],
        answer: "Salmos 27:1"
    },

    {
        verse: "Vinde a mim, todos os que estais cansados e oprimidos, e eu vos aliviarei.",
        options: ["Mateus 11:28", "Mateus 5:4", "João 10:10"],
        answer: "Mateus 11:28"
    },

    {
        verse: "O Senhor te abençoe e te guarde; o Senhor faça resplandecer o seu rosto sobre ti.",
        options: ["Números 6:24-26", "Salmos 67:1", "Hebreus 12:2"],
        answer: "Números 6:24-26"
    },

    {
        verse: "Porque para Deus nada é impossível.",
        options: ["Lucas 1:37", "Marcos 9:23", "Mateus 19:26"],
        answer: "Lucas 1:37"
    }

];

// FUNÇÃO QUE ALEATORIZA UM ARRAY
function shuffleArray(inputArray) {

    inputArray.sort(() => Math.random() - 0.5);

}

let allNumbers = []

// FUNÇÃO QUE ADICIONA VERSO E AS ALTERNATIVAS
function adicionarVerso() {

    var numberRandom = Math.floor(Math.random() * allVerses.length)

    // ENQUANTO A LISTA DE TODOS OS NÚMEROS ALEATORIOS (allNumbers)
    // FOR MENOR QUE QUE A LISTA DE TODOS OS VERSOS (allVerses),
    // SERÁ ADICIONADA UM NOVO VERSO NA TELA
    if (allNumbers.length < allVerses.length) {

        while (true) {

            if (!allNumbers.includes(numberRandom)) {

                allNumbers.push(numberRandom)

                break

            }

            if (allNumbers.includes(numberRandom)) {

                numberRandom = Math.floor(Math.random() * allVerses.length)

            }

        }

        console.log(allNumbers)
        console.log(numberRandom)

        // VERSO APARECE NA TELA
        let blocoVerso = document.getElementById("blocoVerso")

        blocoVerso.innerHTML = allVerses[numberRandom].verse

        // ALTERNATIVAS APARECEM NA TELA
        let allButtons = document.querySelectorAll("#alternativa")

        shuffleArray(allVerses[numberRandom].options)

        for (let index = 0; index < allButtons.length; index++) {

            if (allButtons[index].classList.contains("respostaCerta")) {

                allButtons[index].classList.remove("respostaCerta")

            }

            if (allButtons[index].classList.contains("respostaErrada")) {

                allButtons[index].classList.remove("respostaErrada")

            }

            allButtons[index].innerHTML = allVerses[numberRandom].options[index]

        }

    } else {

        document.getElementById("acabou").style.left = "0"

    }

}

// FUNÇÃO QUE VERICA A RESPOSTA
function verificarResposta(classOfButton) {

    // VARIAVEL QUE CORRESPONDE A ALTERNATIVA QUE FOI ESCOLHIDA
    let button = document.querySelector(`.${classOfButton}`)
    
    // VARIAVEL QUE CORRESPONDE AO ÚLTIMO NÚMERO DA LISTA "allNumbers"
    let lastDigit = allNumbers[allNumbers.length - 1]
    console.log(lastDigit)

    // SE ALTERNATIVA FOR A CORRETA, BOTÃO FICA VERDE
    if (button.innerHTML == allVerses[lastDigit].answer) {

        button.classList.add("respostaCerta")

    // SE ALTERNATIVA FOR A ERRADA, BOTÃO FICA VERMELHO
    } else if (button.innerHTML != allVerses[lastDigit].answer) {

        button.classList.add("respostaErrada")

        box.disabled = true

    }

}

function playGame() {
    
    document.getElementById('sectionPlayGame').classList.add("sectionClose")

    adicionarVerso()
    
}
