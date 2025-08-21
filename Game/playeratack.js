Player1Stats = {
    Aura : 100 
}
Player2Stats = {
    Aura : 100 
}
rodada = 0;

let cartaExemplo = {
    nome:"teste",
    Atlas:'Assets/cards.png',
    AlturaX:0,
    AlturaY:0,
    CoordsX:0,
    CoordsY:0,
    Status : {
        poder: 20
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
function criaCarta(cartaExemplo){

    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = "cards.png";

    img.onload = () => {
        // Define the source rectangle (x, y, width, height) from the original image
        const sourceX = 0; // X-coordinate of the top-left corner of the desired part
        const sourceY = 0; // Y-coordinate of the top-left corner of the desired part
        const sourceWidth = 373; // Width of the desired part
        const sourceHeight = 519; // Height of the desired part

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
/*function criaCarta(){
let cartafront = document.createElement('div');
let cartamid = document.createElement('div');
let cartatexture = document.createElement('img');
cartamid.classList.add('text-bg-primary');
cartafront.classList.add('container');
cartafront.classList.add('container');
cartatexture.src = "Assets/cards.png";
let text = document.createTextNode('carta');
cartamid.appendChild(text);
cartamid.appendChild(cartatexture);
cartafront.appendChild(cartamid);
document.body.appendChild(cartafront);
}*/

function debug(){
    document.getElementById('debug').innerHTML = cartaExemplo.Atlas;
}
window.onload = criaCarta;
window.onload = debug;