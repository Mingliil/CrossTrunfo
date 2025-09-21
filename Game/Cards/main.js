import { debug, Carta, fim } from "./Rework.js";
import {DeckPlayer,  DeckRaro ,DeckEpico ,DeckLenda} from "./Cartas.js";
import { puxaCarta } from "./GerenciaRaridade.js";
import { ataque } from "./GerenciaAtaque.js";
document.getElementById("btDebug").onclick = () =>{
    debug();
    puxaCarta("player1");
    //Carta(DeckPlayer[Math.floor(Math.random() * DeckPlayer.length)],"P1");
}
document.getElementById("botao").onclick = () =>{
    ataque('P1');
}
document.getElementById("fim1").onclick = () =>{
    fim(1);
}
document.getElementById("fim2").onclick = () =>{
    fim(0);
}