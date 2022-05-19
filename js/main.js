let array = [

    {
        verse: "Porque Deus tanto amou o mundo que deu o seu Filho Unigênito, para que todo o que nele crer não pereça, mas tenha a vida eterna.",
        options: ["João 3:16", "Filipenses 3:16", "1 João 3:16"],
        answer: "João 3:16"

    },

    {
        verse: "Portanto, vão e façam discípulos de todas as nações, batizando-os em nome do Pai e do Filho e do Espírito Santo, ensinando-os a obedecer a tudo o que eu lhes ordenei. E eu estarei sempre com vocês, até o fim dos tempos.",
        options: ["Mateus 28:19-20", "Apocalipese 22:1-2", "Salmos 23:1"],
        answer: "Mateus 28:19-20"

    },

    {
        verse: "Busquem, pois, em primeiro lugar o Reino de Deus e a sua justiça, e todas essas coisas lhes serão acrescentadas.",
        options: ["Mateus 6:33", "João 6:33", "Lucas 5:12"],
        answer: "Mateus 6:33"

    },

    {
        verse: "E a paz de Deus, que excede todo o entendimento, guardará os seus corações e as suas mentes em Cristo Jesus.",
        options: ["Filipenses 4:7", "Filipense 4:8", "Hebreus 10:1"],
        answer: "Filipenses 4:7"

    },

    {
        verse: "Por isso não tema, pois estou com você; não tenha medo, pois sou o seu Deus. Eu o fortalecerei e o ajudarei; eu o segurarei com a minha mão direita vitoriosa.",
        options: ["Isaías 41:10", "Salmos 119:105", "Provérbios 17:17"],
        answer: "Isaías 41:10"

    },

    {
        verse: "O Senhor é o meu pastor; nada me faltará.",
        options: ["Salmos 23:1", "Salmos 32:1", "Salmos 1:23"],
        answer: "Salmos 23:1"

    },

    {
        verse: "Lâmpada para os meus pés é a tua palavra, e luz para o meu caminho.",
        options: ["Salmos 119:105", "Provérbios 17:17", "Jó 1:1"],
        answer: "Salmos 119:105"

    },

    {
        verse: "Jesus chorou",
        options: ["João 11:35", "Jó 11:12", "Salmos 1:23"],
        answer: "João 11:35"

    },

    {
        verse: "O amigo ama em todo o tempo; e para a angústia nasce o irmão.",
        options: ["Provérbios 17:17", "Salmos 150:1", "Eclesiastes 3:3"],
        answer: "Provérbios 17:17"

    },

    {
        verse: "Honra teu pai e tua mãe, a fim de que tenhas vida longa na terra que o Senhor, o teu Deus, te dá.",
        options: ["Êxodo 20:12", "Gênesis 20:12", "Deuteronômio 20:12"],
        answer: "Êxodo 20:12"

    },

    {
        verse: "Tudo posso naquele que me fortalece.",
        options: ["Filipenses 4:13", "Tito 1:1", "Marcos 2:1"],
        answer: "Filipenses 4:13"

    },

    {
        verse: "Se me amais, guardareis os meus mandamentos.",
        options: ["João 14:15", "1 João 1:3", "2 João 2:2"],
        answer: "João 14:15"

    },

    {
        verse: "O amor é paciente, é benigno; o amor não arde em ciúmes, não se ufana, não se ensoberbece,",
        options: ["1 Coríntios 13:4", "1 Coríntios 13:5", "2 Coríntios 13:4"],
        answer: "1 Coríntios 13:4"

    },

    {
        verse: "Regozijai-vos sempre.",
        options: ["1 Tessalonicenses 5:16", "2 Tessalonicenses 5:16", "1 Tessalonicenses 4:16"],
        answer: "1 Tessalonicenses 5:16"

    },

    {
        verse: "Trazei todos os dízimos á casa do Tesouro, para que haja mantimento na minha casa; provai-me nisto, diz o Senhor dos Exércitos, se eu não vos abrir as janelas do céu e não derramar sobre vós bênção sem medida.",
        options: ["Malaquias 3:10", "Mateus 3:10", "Marcos 3:10"],
        answer: "Malaquias 3:10"

    },

    {
        verse: "para que, segundo a riqueza da sua glória, vos conceda que sejais fortalecidos com poder, mediante o seu Espírito no homem interior;",
        options: ["Efésios 3:16", "Efésios 6:16", "Hebreus 3:16"],
        answer: "Efésios 3:16"

    },

    {
        verse: "porque o salário do pecado é a morte, mas o dom gratuito de Deus é a vida eterna em Cristo Jesus, nosso Senhor",
        options: ["Romanos 6:23", "Gálatas 6:23", "Hebreus 6:23"],
        answer: "Romanos 6:23"

    },

    {
        verse: "Porque, se vivemos, para o Senhor vivemos, se morremos, para o Senhor morremos. Quer pois, vivamos ou morramos, somos do Senhor.",
        options: ["Romanos 14:8", "Romanos 8:14", "Romanos 11:8"],
        answer: "Romanos 14:8"

    },

    {
        verse: "assim como nos escolheu, nele, antes da fundação do mundo, para sermos santos e irrepreensíveis perante ele; e em amor",
        options: ["Efésios 1:4", "Efésios 4:1", "Efésios 4:6"],
        answer: "Efésios 1:4"

    },

    {
        verse: "A graça do Senhor Jesus Cristo seja com o vosso espírito.",
        options: ["Filemon 1:25", "Tito 1:1", "Ageu 2:10"],
        answer: "Filemon 1:25"

    }

]

// FUNÇÃO QUE ALEATORIZA UM ARRAY
function shuffleArray(inputArray) {

    inputArray.sort(() => Math.random() - 0.5);

}

let allNumbers = []

// FUNÇÃO QUE ADICIONA VERSO E AS ALTERNATIVAS
function adicionarVerso() {

    var numberRandom = Math.floor(Math.random() * array.length)

    // ENQUANTO A LISTA DE TODOS OS NÚMEROS ALEATORIOS FOR MENOR QUE 20,
    // SERÁ ADICIONADA UM NOVO VERSO NA TELA
    if (allNumbers.length < 20) {

        while (true) {

            if (!allNumbers.includes(numberRandom)) {

                allNumbers.push(numberRandom)

                break

            }

            if (allNumbers.includes(numberRandom)) {

                numberRandom = Math.floor(Math.random() * array.length)

            }

        }

        console.log(allNumbers)
        console.log(numberRandom)

        // VERSO APARECE NA TELA
        let blocoVerso = document.getElementById("blocoVerso")

        blocoVerso.innerHTML = array[numberRandom].verse

        // ALTERNATIVAS APARECEM NA TELA
        let allButtons = document.querySelectorAll("#alternativa")

        shuffleArray(array[numberRandom].options)

        for (let index = 0; index < allButtons.length; index++) {

            if (allButtons[index].classList.contains("respostaCerta")) {

                allButtons[index].classList.remove("respostaCerta")

            }

            if (allButtons[index].classList.contains("respostaErrada")) {

                allButtons[index].classList.remove("respostaErrada")

            }

            allButtons[index].innerHTML = array[numberRandom].options[index]

        }

    } else {

        alert("ISSO É TUDO PESSOAL!")

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
    if (button.innerHTML == array[lastDigit].answer) {

        button.classList.add("respostaCerta")

        // SE ALTERNATIVA FOR A ERRADA, BOTÃO FICA VERMELHO
    } else if (button.innerHTML != array[lastDigit].answer) {

        button.classList.add("respostaErrada")

    }

}
