import { Carta, estados } from "./Rework.js";
import {DeckPlayer,  DeckRaro ,DeckEpico ,DeckLenda} from "./Cartas.js";
import { puxaCarta, Raridade, PegaCarta } from "./GerenciaRaridade.js";
import { GerenciaModoAtaque } from "./GerenciaAtaque.js";
import { ModoRodada, fim } from "./GerenciaRodada.js";
import { Player2Stats, Player1Stats } from "./Rework.js";
import { EstiloRaro } from "./GerenciaRaridade.js";

document.getElementById("btDebug").onclick = () =>{
    document.getElementById("btDebug").innerHTML = Player1Stats.modos.quero;//Raridade();
    //puxaCarta("player1", "", true);
    Player1Stats.modos.quero = true;
    //Carta(DeckPlayer[Math.floor(Math.random() * DeckPlayer.length)],"P1");
}
document.getElementById("botao").onclick = () =>{
    if (document.getElementById("botao").innerHTML == "ataque"){ 
        estados.estiloP2 = true;
        GerenciaModoAtaque();

    }
    else if (document.getElementById("botao").innerHTML == "proxima rodada"){
        estados.estiloP2 = false;
        ModoRodada(1);
    }
    else if (document.getElementById("botao").innerHTML = "main menu"){
        ModoRodada(2);
    }
    EstiloRaro(Player2Stats.card.Raridade,"P2")
    document.getElementById("debug").innerHTML = estados.estiloP2;
}
document.getElementById("fim1").onclick = () =>{
    fim(1);
}
document.getElementById("fim2").onclick = () =>{
    fim(0);
}
