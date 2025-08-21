Player1Stats = {
    Aura : 100 
}
Player2Stats = {
    Aura : 100 
}
rodada = 0;


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

function criaCarta(){
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
}
/*function criaCarta(){
let div = document.createElement('div');
div.classList.add('text-bg-primary');
let text = document.createTextNode('Test');
div.appendChild(text);
document.body.appendChild(div)
}*/
window.onload = criaCarta;