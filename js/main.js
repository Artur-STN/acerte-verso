let array = [
    
    {
        verso: "Porque Deus tanto amou o mundo que deu o seu Filho Unigênito, para que todo o que nele crer não pereça, mas tenha a vida eterna.",
        options: ["João 3:16", "Filipenses 3:16", "1 João 3:16"],
        resposta: "João 3:16"

    },

    {
        verso: "Portanto, vão e façam discípulos de todas as nações, batizando-os em nome do Pai e do Filho e do Espírito Santo, ensinando-os a obedecer a tudo o que eu lhes ordenei. E eu estarei sempre com vocês, até o fim dos tempos.",
        options: ["Mateus 28:19-20", "Apocalipese 22:1-2", "Salmos 23:1"],
        resposta: "Mateus 28:19-20"
    
    },

    {
        verso: "Busquem, pois, em primeiro lugar o Reino de Deus e a sua justiça, e todas essas coisas lhes serão acrescentadas.",
        options: ["Mateus 6:33", "João 6:33", "Lucas 5:12"],
        resposta: "Mateus 6:33"
    
    },

    {
        verso: "E a paz de Deus, que excede todo o entendimento, guardará os seus corações e as suas mentes em Cristo Jesus.",
        options: ["Filipenses 4:7", "Filipense 4:8", "Hebreus 10:1"],
        resposta: "Filipenses 4:7"
    
    },

    {
        verso: "Por isso não tema, pois estou com você; não tenha medo, pois sou o seu Deus. Eu o fortalecerei e o ajudarei; eu o segurarei com a minha mão direita vitoriosa.",
        options: ["Isaías 41:10", "Salmos 119:105", "Provérbios 17:17"],
        resposta: "Isaías 41:10"
    
    },

    {
        verso: "O Senhor é o meu pastor; nada me faltará.",
        options: ["Salmos 23:1", "Salmos 32:1", "Salmos 1:23"],
        resposta: "Salmos 23:1"
    
    },

    {
        verso: "Lâmpada para os meus pés é a tua palavra, e luz para o meu caminho.",
        options: ["Salmos 119:105", "Provérbios 17:17", "Jó 1:1"],
        resposta: "Salmos 119:105"
    
    },

    {
        verso: "Jesus chorou",
        options: ["João 11:35", "Jó 11:12", "Salmos 1:23"],
        resposta: "João 11:35"
    
    },

    {
        verso: "O amigo ama em todo o tempo; e para a angústia nasce o irmão.",
        options: ["Provérbios 17:17", "Salmos 150:1", "Eclesiastes 3:3"],
        resposta: "Provérbios 17:17"
    
    },

    {
        verso: "Honra teu pai e tua mãe, a fim de que tenhas vida longa na terra que o Senhor, o teu Deus, te dá.",
        options: ["Êxodo 20:12", "Gênesis 20:12", "Deuteronômio 20:12"],
        resposta: "Êxodo 20:12"
    
    },

    {
        verso: "Tudo posso naquele que me fortalece.",
        options: ["Filipenses 4:13", "Tito 1:1", "Marcos 2:1"],
        resposta: "Filipenses 4:13"
    
    },

    {
        verso: "Se me amais, guardareis os meus mandamentos.",
        options: ["João 14:15", "1 João 1:3", "2 João 2:2"],
        resposta: "João 14:15"
    
    },

    {
        verso: "O amor é paciente, é benigno; o amor não arde em ciúmes, não se ufana, não se ensoberbece,",
        options: ["1 Coríntios 13:4", "1 Coríntios 13:5", "2 Coríntios 13:4"],
        resposta: "1 Coríntios 13:4"
    
    },

    {
        verso: "Regozijai-vos sempre.",
        options: ["1 Tessalonicenses 5:16", "2 Tessalonicenses 5:16", "1 Tessalonicenses 4:16"],
        resposta: "1 Tessalonicenses 5:16"
    
    },

    {
        verso: "Trazei todos os dízimos á casa do Tesouro, para que haja mantimento na minha casa; provai-me nisto, diz o Senhor dos Exércitos, se eu não vos abrir as janelas do céu e não derramar sobre vós bênção sem medida.",
        options: ["Malaquias 3:10", "Mateus 3:10", "Marcos 3:10"],
        resposta: "Malaquias 3:10"
    
    },

    {
        verso: "para que, segundo a riqueza da sua glória, vos conceda que sejais fortalecidos com poder, mediante o seu Espírito no homem interior;",
        options: ["Efésios 3:16", "Efésios 6:16", "Hebreus 3:16"],
        resposta: "Efésios 3:16"
    
    },

    {
        verso: "porque o salário do pecado é a morte, mas o dom gratuito de Deus é a vida eterna em Cristo Jesus, nosso Senhor",
        options: ["Romanos 6:23", "Gálatas 6:23", "Hebreus 6:23"],
        resposta: "Romanos 6:23"
    
    },

    {
        verso: "Porque, se vivemos, para o Senhor vivemos, se morremos, para o Senhor morremos. Quer pois, vivamos ou morramos, somos do Senhor.",
        options: ["Romanos 14:8", "Romanos 8:14", "Romanos 11:8"],
        resposta: "Romanos 14:8"
    
    },

    {
        verso: "assim como nos escolheu, nele, antes da fundação do mundo, para sermos santos e irrepreensíveis perante ele; e em amor",
        options: ["Efésios 1:4", "Efésios 4:1", "Efésios 4:6"],
        resposta: "Efésios 1:4"
    
    },

    {
        verso: "A graça do Senhor Jesus Cristo seja com o vosso espírito.",
        options: ["Filemon 1:25", "Tito 1:1", "Ageu 2:10"],
        resposta: "Filemon 1:25"
    
    }

]

let allNumbers = []

function adicionarVerso() {


    let numberRandom = Math.floor(Math.random() * array.length)

    allNumbers.push(numberRandom)

    console.log(numberRandom)
    console.log(allNumbers)

    
}

// FUNÇÃO ALEATORIZA UM ARRAY
function shuffleArray(inputArray){

    inputArray.sort(()=> Math.random() - 0.5);

}
