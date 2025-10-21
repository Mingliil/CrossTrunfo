import { Carta, estados, RolarCarta } from "./Rework.js";
import {DeckPlayer,  DeckRaro ,DeckEpico ,DeckLenda, DeckFull} from "./Cartas.js";
import { puxaCarta, Raridade, PegaCarta } from "./GerenciaRaridade.js";
import { GerenciaModoAtaque, HitMark } from "./GerenciaAtaque.js";
import { ModoRodada, fim } from "./GerenciaRodada.js";
import { Player2Stats, Player1Stats } from "./Rework.js";
import { EstiloRaro } from "./GerenciaRaridade.js";
import { PureAuraAndDrip } from "./GerenciaEspeciais.js";
import { AbreMenu, ResetaEstados } from "./GerenciaRodada.js";
//aqui é onde esta a parte de playlist de soundtrack do jogo sem que esteja relacionado as cartas
import { BackgroundST } from "./GerenciaAudio.js";


const Soundtrack = document.getElementById("audioST");


 Soundtrack.onended = () => {
        if (estados.menu == false){
            BackgroundST();
        }
}

if (Player2Stats.card == DeckFull.Goku){
    const drip = Math.floor(Math.random() * 20);
    if (drip == 0){
        PureAuraAndDrip("P2");
    }
}
//resto do jogo
document.getElementById("btDebug").onclick = () =>{
    
    document.getElementById("btDebug").innerHTML = estados.estadoRodada;//Raridade();
    //puxaCarta("player1", "", true);
    Player1Stats.modos.quero = true;
    //Carta(DeckPlayer[Math.floor(Math.random() * DeckPlayer.length)],"P1");
    RolarCarta("P2");
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
    estados.podePausar = false;
    fim(0);
}
document.getElementById('btnPlay').addEventListener('click', function () {
      estados.menu = false;
      estados.podePausar = true;
      estados.getBackCounter++;
      if (estados.getBackCounter >= 2){
        estados.getBackCounter = 1;
      }
      AbreMenu(false)
      document.getElementById("jogo").style.display = "block";
      document.getElementById("menu").style.display = "none";
      //window.location.href = 'Jogo.html';
});

if (estados.menu ==false){
    AbreMenu(false)
}
document.addEventListener("keydown", function(e){
    if (e.code == "Escape"){
        estados.menu = true;
        document.getElementById("btDebug").innerHTML = estados.getBackCounter;
        if (estados.podePausar == true){
            estados.pause = true;
            AbreMenu(true);
            
        if (estados.getBackCounter == 2){
            AbreMenu(false);
            estados.getBackCounter = 0;
        }
        }
    }
    estados.getBackCounter++;
})