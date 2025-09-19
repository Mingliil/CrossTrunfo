
Player1Stats = {
    Aura : 100,
    card: 0
}
Player2Stats = {
    Aura : 100,
    card: 0
}
rodada = 0;
Deck = [];



Deck.Morshu = {
    code:0,
    nome:"Morshu",
    Atlas:'Assets/cards.png',
    AlturaX:373,
    AlturaY:519,
    CoordsX:0,
    CoordsY:0,
    DescX: 1,
    DescY: 0,
    ImgTamanho:"50%",
    Status : {
        poder: 20,
        defesa: 20,
        magia: 20
    }
}
Deck.Superman = {
    code:1,
    nome:"super",
    Atlas:'Assets/cards.png',
    AlturaX:373,
    AlturaY:519,
    CoordsX:385,
    CoordsY:538,
    DescX: 1,
    DescY: 0,
    ImgTamanho:"50%",
    Status : {
        poder: 100,
        defesa: 0,
        magia: 0
    }
}
Deck.SOAD = {
    code:2,
    nome:"SOAD",
    Atlas:'Assets/cards.png',
    AlturaX:442,
    AlturaY:549,
    CoordsX:0,
    CoordsY:1080,
    DescX: 1,
    DescY: 0,
    ImgTamanho:"63%",
    Status : {
        poder: 40,
        defesa: 10,
        magia: 50
    }
}
Deck.GlassAnimals = {
    code:3,
    nome:"TOSoTP",
    Atlas:'Assets/cards.png',
    AlturaX:373,
    AlturaY:519,
    CoordsX:0,
    CoordsY:1635,
    DescX: 1,
    DescY: 0,
    ImgTamanho:"50%",
    Status : {
        poder: 0,
        defesa: 40,
        magia: 60
    }
}
Deck.Ubi = {
    code:4,
    nome:"Ubirajara",
    Atlas:'Assets/cards.png',
    AlturaX:373,
    AlturaY:519,
    CoordsX:0,
    CoordsY:2128,
    DescX: 1,
    DescY: 0,
    ImgTamanho:"50%",
    Status : {
        poder: 50,
        defesa: 50,
        magia: 0
    }
}
Deck.Gaster = {
    code:5,
    nome:"Gaster",
    Atlas:'Assets/cards.png',
    AlturaX:373,
    AlturaY:519,
    CoordsX:0,
    CoordsY:2726,
    DescX: 1,
    DescY: 0,
    ImgTamanho:"50%",
    Status : {
        poder: 90,
        defesa: 0,
        magia: 90
    }
}
Deck.Circus = {
    code:6,
    nome:"TADC",
    Atlas:'Assets/cards.png',
    AlturaX:528,
    AlturaY:717,
    CoordsX:0,
    CoordsY:3273,
    DescX: 1,
    DescY: 0,
    ImgTamanho:"70%",
    Status : {
        poder: 0,
        defesa: 0,
        magia: 100
    }
}
Deck.YAAI = {
    code:6,
    nome:"TADC",
    Atlas:'Assets/cards.png',
    AlturaX:598,
    AlturaY:717,
    CoordsX:0,
    CoordsY:3983,
    DescX: 1,
    DescY: 0,
    ImgTamanho:"80%",
    Status : {
        poder: 0,
        defesa: 0,
        magia: 100
    }
}

Deck.Sisyphus = {
    code:996,
    nome:"prime",
    Atlas:'Assets/cards.png',
    Audiofont:'Assets/audios/Prison.mp3',
    AudioType: 'audio/mp3',
    AlturaX:528,
    AlturaY:747,
    CoordsX:780,
    CoordsY:0,
    DescX: 1,
    DescY: 0,
    ImgTamanho:"80%",
    Status : {
        poder: 100,
        defesa: 100,
        magia: 100
    }
}

let estadoRodada = 0;
let CartaRel=1; //0 = escondido - 1 =revelado
const DeckLenda = [Deck.Sisyphus];
const DeckPlayer = [Deck.Morshu, Deck.Superman, Deck.SOAD, Deck.GlassAnimals, Deck.Ubi, Deck.Gaster, Deck.Circus,Deck.YAAI];
function fim(x){
    if (x==0){
    location.reload();
    }
    if (x==1){
    window.open('Menu.html', '_self').focus();
    }
}
function ataque(P){
    const P1card = Player1Stats.card.Status;
    const P2card = Player2Stats.card.Status;
    let escolha = 0;
    let atacando = 0;
    let ataqueP2 = 0;
    let result = 0;
    //cartaRel=0;
    if (estadoRodada == 2){
        const bt = document.getElementById("botao");
       bt.setAttribute("data-bs-target","#exampleModal");
    }
    else if(estadoRodada == 1){
        estadoRodada = 0;
        if(document.getElementById("status1").checked || document.getElementById("status2").checked || document.getElementById("status3").checked){
        atacando++;
        if(document.getElementById("status1").checked){
            escolha = P1card.poder;
            ataqueP2 = P2card.poder;
        }
        if(document.getElementById("status2").checked){
            escolha = P1card.defesa;
            ataqueP2 = P2card.defesa;
        }
        if(document.getElementById("status3").checked){
            escolha = P1card.magia;
            ataqueP2 = P2card.magia;
        }
        result = escolha - ataqueP2; 
        }
        else{
            alert("escolha 1 opção");
        }
            if (P == "P1" && atacando==1){
                if (result == 0){
                    alert("EMPATE!!");
                    EstadoRodada(0);
                }
                else if (result>0){
                    Player2Stats.Aura -= result;
                    document.getElementById("auraP2").innerHTML = Player2Stats.Aura;
                    if (Player2Stats.Aura <=0){
                        document.getElementById("Estado").innerHTML = "VENCEU!";
                        document.getElementById("auraP2").innerHTML = 0;
                        if (rodada == 1){
                            document.getElementById("rodada").innerHTML = "PLAYER 1 GAHNOU EM <br>" + rodada+" RODADA";
                            document.getElementById("rodadaFim").innerHTML = "PLAYER 1 GAHNOU EM <br>" + rodada+" RODADA";
                        }
                        else{
                        document.getElementById("rodada").innerHTML = "PLAYER 1 GAHNOU EM <br>" + rodada+" RODADAS";
                        document.getElementById("rodadaFim").innerHTML = "PLAYER 1 GAHNOU EM <br>" + rodada+" RODADAS";
                        }
                        EstadoRodada(2);
                    }
                    else{
                        EstadoRodada(0);
                    }
                }
                else if (result<0){
                    Player1Stats.Aura -= -result;
                    document.getElementById("auraP1").innerHTML = Player1Stats.Aura;
                    if(Player1Stats.Aura <=0){
                        document.getElementById("Estado").innerHTML = "PERDEU!";
                        document.getElementById("auraP1").innerHTML = 0;
                        if (rodada == 1){
                            document.getElementById("rodada").innerHTML = "PLAYER 2 GAHNOU EM <br>" + rodada+" RODADA";
                            document.getElementById("rodadaFim").innerHTML = "PLAYER 2 GAHNOU EM <br>" + rodada+" RODADA";
                        }
                        else{
                        document.getElementById("rodada").innerHTML = "PLAYER 2 GAHNOU EM <br>" + rodada+" RODADAS";
                        document.getElementById("rodadaFim").innerHTML = "PLAYER 2 GAHNOU EM <br>" + rodada+" RODADAS";
                        }
                        EstadoRodada(2);
                    }
                    else{
                        EstadoRodada(0);
                }
            }
        }
    }
    else{
        
        EstadoRodada(1);
    }
}

function EstadoRodada(x){
    if (x == 1){
        CartaRel--;
        puxaCarta("player1");
        rodada++;
        document.getElementById("rodada").innerHTML = rodada;
        estadoRodada = 1;
        document.getElementById("botao").innerHTML = "ataque";
        puxaCarta("player2");
    }
    else{
        CartaRel++;
        Carta(Player2Stats.card, "P2");
        document.getElementById("botao").innerHTML = "proxima rodada";
    }
    if (x == 2){
         const bt = document.getElementById("botao");
       bt.setAttribute("data-bs-target","#exampleModal");
        estadoRodada = 2;
        document.getElementById("botao").innerHTML = "main menu";
    }
}

let comecou = 1;

function SuperTrunfo(carta){
    const audio = document.getElementById("audio");
    const AudioScr = document.getElementById("audioScr");
    AudioScr.type = carta.AudioType;
    AudioScr.src = Player1Stats.card.Audiofont;
    //audio.onload = () =>{  
        audio.load();
        audio.play();
    //}
    //window.onload = audio.play();
}

function Carta(carta, P){
   /* const cardDesc = document.getElementById('CartaP1Desc');
    const contextoDesc = canvas.getContext('2d');
    const imgDesc = new Image();
    imgDesc.src = carta.Atlas;*/
    let canvas;
    let img = new Image();
    
    if (P == "P1"){
    canvas = document.getElementById('CartaP1');
    img.src = carta.Atlas;
    document.getElementById("CartaP1").style.width = carta.ImgTamanho;
    }

    if (P == "P2"){
    canvas = document.getElementById('CartaP2');
        if (CartaRel == 0){
        img.src = 'Assets/ExemploCartaFundo.png';
        }
        else{
        img.src = Player2Stats.card.Atlas;
        }
    } 
    debug();
    const ctx = canvas.getContext('2d');
    
    img.onload = () => {
        let sourceX = carta.CoordsX;
        let sourceY = carta.CoordsY; 
        let sourceWidth = carta.AlturaX;
        let sourceHeight = carta.AlturaY;
        if (P == "P1"){
            sourceX = carta.CoordsX;
            sourceY = carta.CoordsY; 
            sourceWidth = carta.AlturaX;
            sourceHeight = carta.AlturaY;
        }
        if (P == "P2"){
            if (CartaRel == 0){
                sourceX = 0;
                sourceY = 0; 
                sourceWidth = 373;
                sourceHeight =519; 
            }
            else{
                sourceX = carta.CoordsX;
                sourceY = carta.CoordsY; 
                sourceWidth = carta.AlturaX;
                sourceHeight = carta.AlturaY;
            }
        }

        // Define the destination rectangle (x, y, width, height) on the canvas
        const destX = 0; // X-coordinate on the canvas to draw the part
        const destY = 0; // Y-coordinate on the canvas to draw the part
        const destWidth = sourceWidth; // Width to draw on the canvas (can be scaled)
        const destHeight = sourceHeight; // Height to draw on the canvas (can be scaled)

        // Set canvas dimensions if needed
        canvas.width = destWidth;
        canvas.height = destHeight;
        ctx.drawImage(
            img,
            sourceX,
            sourceY,
            sourceWidth,
            sourceHeight,
            destX,
            destY,
            destWidth,
            destHeight
        );

    };

}

function puxaCarta(P){
    let random = Math.floor(Math.random() * 8);
    let lenda = Math.floor(Math.random() * 99);
    if (P == "player1"){
        random = 4;
        let c = 0;
        if (lenda == 0){
            c = 0;
            Player1Stats.card = DeckLenda[c];
            Carta(Player1Stats.card, "P1");
            SuperTrunfo(Player1Stats.card); 
        }
        else{
            
            c = random;
            Player1Stats.card = DeckPlayer[c];
            Carta(Player1Stats.card, "P1");
        }
        
        
        document.getElementById("cartaPoder").innerHTML = "Poder: " +Player1Stats.card.Status.poder + "<br>";
        document.getElementById("cartaDefesa").innerHTML = "Defesa: " +Player1Stats.card.Status.defesa + "<br>";
        document.getElementById("cartaMagia").innerHTML = "Magia: " +Player1Stats.card.Status.magia + "<br>";
    }
    if (P == "player2"){
        let c2 = random;
        Player2Stats.card = DeckPlayer[c2];
        Carta(Player2Stats.card, "P2");
    }
}
function debug(){
    document.getElementById('debug').innerHTML = Player1Stats.card.nome;
    document.getElementById('debug').innerHTML = CartaRel;
}
window.onload = EstadoRodada(1);
window.onload = puxaCarta("player2");
window.onload = puxaCarta("player1");
window.onload = debug;