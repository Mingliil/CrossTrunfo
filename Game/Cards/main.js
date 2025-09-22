import { debug, Carta } from "./Rework.js";
import {DeckPlayer,  DeckRaro ,DeckEpico ,DeckLenda} from "./Cartas.js";
import { puxaCarta } from "./GerenciaRaridade.js";
import { GerenciaModoAtaque } from "./GerenciaAtaque.js";
import { ModoRodada, fim } from "./GerenciaRodada.js";
document.getElementById("btDebug").onclick = () =>{
    debug();
    puxaCarta("player1");
    //Carta(DeckPlayer[Math.floor(Math.random() * DeckPlayer.length)],"P1");
}
document.getElementById("botao").onclick = () =>{
    if (document.getElementById("botao").innerHTML == "ataque"){
        GerenciaModoAtaque();

        //ataque('P1');
        
    }
    else if (document.getElementById("botao").innerHTML == "proxima rodada"){
        ModoRodada(1);
    }
    else if (document.getElementById("botao").innerHTML = "main menu"){
        ModoRodada(2);
    }
}
document.getElementById("fim1").onclick = () =>{
    fim(1);
}
document.getElementById("fim2").onclick = () =>{
    fim(0);
}
