import {DeckPlayer,  DeckRaro ,DeckEpico ,DeckLenda, DeckFull} from "./Cartas.js";
import { Player1Stats, Player2Stats } from "./Rework.js";
/*
    Aqui vai ser aonde as habilidades especiais irão interagir com
    as cartas e os ataques

*/
export function GasterRandom(){
    let Neg = Math.floor(Math.random() * 2);
    if (Neg == 0){
        DeckFull.Gaster.Status.poder = Math.floor(Math.random() * 150);
    }
    else{
        DeckFull.Gaster.Status.poder = -Math.floor(Math.random() * 150);
    }
    Neg = Math.floor(Math.random() * 2);
    if (Neg == 0){
        DeckFull.Gaster.Status.defesa = Math.floor(Math.random() * 150);
    }
    else{
        DeckFull.Gaster.Status.defesa = -Math.floor(Math.random() * 150);
    }
    Neg = Math.floor(Math.random() * 2);
    if (Neg == 0){
        DeckFull.Gaster.Status.magia = Math.floor(Math.random() * 150);
    }
    else{
        DeckFull.Gaster.Status.magia = -Math.floor(Math.random() * 150);
    }
}
export function imsad(){
    Player1Stats.card.Atlas = 'Assets/exeSad.webp';
    Player1Stats.card.AlturaX=1344;
    Player1Stats.card.AlturaY=1011;
    Player1Stats.card.CoordsX=0;
    Player1Stats.card.CoordsY=0;
    Player1Stats.card.ImgTamanho="80%";
    Player1Stats.card.descricao = "I'm sad.... :(";
    Player1Stats.card.raridade="???";
    
    Player1Stats.card.Status.poder= -9;
    Player1Stats.card.Status.defesa= -8;
    Player1Stats.card.Status.magia= -2011
}
export function PureAuraAndDrip(){
    Player1Stats.card.Atlas = 'Assets/gokuDrip.png';
    Player1Stats.card.AlturaX=669;
    Player1Stats.card.AlturaY=1195;
    Player1Stats.card.CoordsX=0;
    Player1Stats.card.CoordsY=0;
    Player1Stats.card.ImgTamanho="80%";
    Player1Stats.card.nome="goku?";
    Player1Stats.card.descricao = "Hey, i heard you Jordans are <span style='color:red;'><b>FAKE</b></span>...";
    Player1Stats.card.raridade="DRIP";
    Player1Stats.card.Status.poder= 100;
    Player1Stats.card.Status.defesa= 100;
    Player1Stats.card.Status.magia= 100
}