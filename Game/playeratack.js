Player1Stats = {
    Aura : 100 
}
Player2Stats = {
    Aura : 100 
}
rodada = 0;

Deck = [];
DeckPlayer1 = [];
Deck.cartaExemplo = {
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



var suits = ["spades", "diamonds", "clubs", "hearts"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function ataqueP1(){
    Player2Stats.Aura = Player2Stats.Aura - 20;
    document.getElementById("VidaP2").innerHTML = Player2Stats.Aura;
    rodada++;
    document.getElementById("rodada").innerHTML = rodada;
}

function ataqueP2(){
    Player1Stats.Aura = Player1Stats.Aura - 20;
    document.getElementById("VidaP1").innerHTML = Player1Stats.Aura;
    rodada++;
    document.getElementById("rodada").innerHTML = rodada;
}
function CartaP1(carta){

   /* const cardDesc = document.getElementById('CartaP1Desc');
    const contextoDesc = canvas.getContext('2d');
    const imgDesc = new Image();
    imgDesc.src = carta.Atlas;*/

    const canvas = document.getElementById('CartaP1');
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
function debug(){
    document.getElementById('debug').innerHTML = DeckPlayer1[0];
}
window.onload = CartaP1(Deck.cartaExemplo);
window.onload = debug;