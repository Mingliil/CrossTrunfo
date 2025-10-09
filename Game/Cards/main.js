import { Carta, estados } from "./Rework.js";
import {DeckPlayer,  DeckRaro ,DeckEpico ,DeckLenda, DeckFull} from "./Cartas.js";
import { puxaCarta, Raridade, PegaCarta } from "./GerenciaRaridade.js";
import { GerenciaModoAtaque, HitMark } from "./GerenciaAtaque.js";
import { ModoRodada, fim } from "./GerenciaRodada.js";
import { Player2Stats, Player1Stats } from "./Rework.js";
import { EstiloRaro } from "./GerenciaRaridade.js";
import { PureAuraAndDrip } from "./GerenciaEspeciais.js";
//aqui é onde esta a parte de playlist de soundtrack do jogo sem que esteja relacionado as cartas
import { BackgroundST } from "./GerenciaAudio.js";

const Soundtrack = document.getElementById("audioST");
    if (estados.audioRolar == 0){
         BackgroundST();
    Soundtrack.onended = () => {
        BackgroundST();
    }
}
 Soundtrack.onended = () => {
        BackgroundST();
}
if (Player2Stats.card == DeckFull.Goku){
    const drip = Math.floor(Math.random() * 30);
    if (drip == 0){
        PureAuraAndDrip("P2");
    }
}
//resto do jogo

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
    if (Player1Stats.Aura <= 0 && Player1Stats.modos.modoPan == false && Player1Stats.modos.modoPrime == false|| Player2Stats.Aura <=0 ){
        if (Player1Stats.Aura <= 0){
            ModoRodada(2, true);
        }
        else{
            ModoRodada(2, false);
        }
    }
    EstiloRaro(Player2Stats.card.Raridade,"P2")
}
document.getElementById("fim1").onclick = () =>{
    fim(1);
}
document.getElementById("fim2").onclick = () =>{
    fim(0);
}
