import { debug, Carta, puxaCarta } from "./Rework.js";
//import {DeckPlayer,  DeckRaro ,DeckEpico ,DeckLenda} from "./Stats.js";
document.getElementById("btDebug").onclick = () =>{
    debug();
    puxaCarta("player1");
    //Carta(DeckPlayer[Math.floor(Math.random() * DeckPlayer.length)],"P1");
}