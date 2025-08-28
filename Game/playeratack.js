Player1Stats = {
    Aura : 100 
}
Player2Stats = {
    Aura : 100 
}
rodada = 0;

Deck = [];
Deck.Morshu = {
    code:0,
    nome:"teste",
    Atlas:'Assets/cards.png',
    AlturaX:373,
    AlturaY:519,
    CoordsX:0,
    CoordsY:0,
    DescX: 1,
    DescY: 0,
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
    CoordsX:380,
    CoordsY:1080,
    DescX: 1,
    DescY: 0,
    Status : {
        poder: 40,
        defesa: 10,
        magia: 50
    }
}
Deck.GlassAnimals = {
    code:2,
    nome:"SOAD",
    Atlas:'Assets/cards.png',
    AlturaX:373,
    AlturaY:519,
    CoordsX:380,
    CoordsY:1680,
    DescX: 1,
    DescY: 0,
    Status : {
        poder: 40,
        defesa: 10,
        magia: 50
    }
}

function ataque(P){
    if (P == "P1"){
        let diff;
        Player2Stats.Aura -= 20;
        document.getElementById("auraP2").innerHTML = Player2Stats.Aura;
    }
    document.getElementById("VidaP2").innerHTML = Player2Stats.Aura;
    rodada++;
    document.getElementById("rodada").innerHTML = rodada;
}

function Carta(carta, P){

   /* const cardDesc = document.getElementById('CartaP1Desc');
    const contextoDesc = canvas.getContext('2d');
    const imgDesc = new Image();
    imgDesc.src = carta.Atlas;*/
    let canvas;

    if (P == "P1"){
    canvas = document.getElementById('CartaP1');
    }
    if (P == "P2"){
    canvas = document.getElementById('CartaP2');
    }

    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = carta.Atlas;

    img.onload = () => {
        // Define the source rectangle (x, y, width, height) from the original image
        const sourceX = carta.CoordsX; // X-coordinate of the top-left corner of the desired part
        const sourceY = carta.CoordsY; // Y-coordinate of the top-left corner of the desired part
        const sourceWidth = carta.AlturaX; // Width of the desired part
        const sourceHeight = carta.AlturaY; // Height of the desired part

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

function criarDeck(){

}
function puxaCarta(P){
    const DeckPlayer = [Deck.Morshu, Deck.Superman, Deck.SOAD, Deck.GlassAnimals];
    if (P == "player1"){
        let c = 1
        Carta(DeckPlayer[c], "P1");
        document.getElementById("cartaPoder").innerHTML = "Poder: " +DeckPlayer[c].Status.poder + "<br>";
        document.getElementById("cartaDefesa").innerHTML = "Defesa: " +DeckPlayer[c].Status.defesa + "<br>";
        document.getElementById("cartaMagia").innerHTML = "Magia: " +DeckPlayer[c].Status.magia + "<br>";
    }
    if (P == "player2"){
        Carta(DeckPlayer[0], "P2");
    }
}
function debug(){
    document.getElementById('debug').innerHTML = DeckPlayer1[0];
}
window.onload = criarDeck();
window.onload = puxaCarta("player2");
window.onload = puxaCarta("player1");
window.onload = debug;