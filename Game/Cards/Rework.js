import { AudioST, SuperIntro} from "./GerenciaAudio.js";
import {DeckPlayer,  DeckRaro ,DeckEpico ,DeckLenda} from "./Cartas.js";
import { puxaCarta } from "./GerenciaRaridade.js";
import { ModoRodada } from "./GerenciaRodada.js";
export let estados ={
    estadoRodada:0,
    rodada : 0,
    estaAtacando : true, // se estaAtacando = true, esconde carta do inimigo, senão mostra carta
    CartaRel : 1 //0 = escondido - 1 =revelado
}
export let Player1Stats = {
    Aura : 100,
    card: 0,
    ultimacarta:0
};
export let Player2Stats = {
    Aura : 100,
    card: 0,
    ultimacarta:0
};

export function fim(x){
    if (x==0){
    location.reload();
    }
    if (x==1){
    window.open('Menu.html', '_self').focus();
    }
};

export function Carta(carta, P){
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
        if (estados.CartaRel == 0){
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
            if (estados.CartaRel == 0){
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
export function debug(){
    document.getElementById('debug').innerHTML = Player1Stats.card.nome;
    document.getElementById('debug').innerHTML = estados.CartaRel;
}
window.onload = ModoRodada(1);
window.onload = puxaCarta("player2");
window.onload = puxaCarta("player1");
