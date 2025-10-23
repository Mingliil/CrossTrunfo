import { PegaCarta, puxaCarta } from "./GerenciaRaridade.js";
import {RolarCarta, estados, Carta, Player1Stats,Player2Stats } from "./Rework.js";
import { EstiloRaro } from "./GerenciaRaridade.js";
import { DeckFull } from "./Cartas.js";
import { BackgroundST } from "./GerenciaAudio.js";
import { PureAuraAndDrip } from "./GerenciaEspeciais.js";


export function ModoRodada(x, perdeu){
    /*
        Estados do x
        x = 1: hora de atacar
        x = 0: proxima rodada
        x = 2: fim
    */
    if (x == 1){
        estados.CartaRel=0;
        puxaCarta("player1");
        estados.rodada++;
        document.getElementById("rodada").innerHTML = estados.rodada;
        estados.estadoRodada = 1;
        document.getElementById("CartaP2Nome").innerHTML = "";
        document.getElementById("CartaP2Rari").innerHTML = "";
        document.getElementById("CartaP2Desc").innerHTML = "";
        document.getElementById("botao").innerHTML = "ataque";
        puxaCarta("player2");
        RolarCarta("P2");
        //Carta(Player2Stats.card, "P2");
        EstiloRaro(Player2Stats.card.raridade, "P2");
    }
    else if (x==0){

        estados.CartaRel=1;
        if (Player2Stats.card == DeckFull.Goku){
            const drip = Math.floor(Math.random() * 25);
            if (drip == 0){
                    PureAuraAndDrip("P2");
            }
        }
        RolarCarta("P2");
        //Carta(Player2Stats.card, "P2");
        document.getElementById("CartaP2Nome").innerHTML = Player2Stats.card.nome;
        document.getElementById("CartaP2Rari").innerHTML = Player2Stats.card.raridade;
        document.getElementById("CartaP2Desc").innerHTML = Player2Stats.card.descricao;
        document.getElementById("botao").innerHTML = "proxima rodada";
        estados.estadoRodada = 0;
        if (Player2Stats.card == DeckFull.Goku){
            EstiloRaro("ÉPICO", "P2");
        }else{
            EstiloRaro(Player2Stats.card.raridade, "P2");
        }
    }
    if (x == 2){
            const bt = document.getElementById("botao");
            bt.setAttribute("data-bs-target","#exampleModal");
            estados.estadoRodada = 2;
            document.getElementById("botao").innerHTML = "main menu";
            if(perdeu == true){
                estados.derrotado = true;
                if (estados.rodada == 1){
                    document.getElementById("rodada").innerHTML = "PLAYER 2 GAHNOU EM <br>" + estados.rodada+" RODADA";
                    document.getElementById("rodadaFim").innerHTML = "PLAYER 2 GAHNOU EM <br>" + estados.rodada+" RODADA";
                }
                else{
                document.getElementById("rodada").innerHTML = "PLAYER 2 GAHNOU EM <br>" + estados.rodada+" RODADAS";
                document.getElementById("rodadaFim").innerHTML = "PLAYER 2 GAHNOU EM <br>" + estados.rodada+" RODADAS";
                }
                document.getElementById("Estado").innerHTML = "PERDEU";
            }
            else{
                estados.derrotado = false;
                if (estados.rodada == 1){
                    document.getElementById("rodada").innerHTML = "PLAYER 1 GAHNOU EM <br>" + estados.rodada+" RODADA";
                    document.getElementById("rodadaFim").innerHTML = "PLAYER 1 GAHNOU EM <br>" + estados.rodada+" RODADA";
                }
                else{
                    document.getElementById("rodada").innerHTML = "PLAYER 1 GAHNOU EM <br>" + estados.rodada+" RODADAS";
                    document.getElementById("rodadaFim").innerHTML = "PLAYER 1 GAHNOU EM <br>" + estados.rodada+" RODADAS";
                }
                document.getElementById("Estado").innerHTML = "VENCEU";
            }
    }
    if(Player1Stats.Aura>100){
        document.getElementById("auraP1").style ="color:rgba(0, 140, 255, 1);";
    }
    else{
        document.getElementById("auraP1").style ="color:rgba(88, 255, 102, 1);";
    }
    if(Player1Stats.Aura<45){
        document.getElementById("auraP1").style ="color:rgba(255, 0, 0, 1);";
    }

    if(Player2Stats.Aura>100){
        document.getElementById("auraP2").style ="color:rgba(0, 140, 255, 1);";
    }
    else{
        document.getElementById("auraP2").style ="color:rgba(88, 255, 102, 1);";
    }
    if(Player2Stats.Aura<45){
        document.getElementById("auraP2").style ="color:rgba(255, 0, 0, 1);";
    
    }
}

export function fim(x){
    if (x==0){
        estados.podePausar = true;
        ResetaEstados("placar")
        //location.reload();
    }
    if (x==1){
        estados.podePausar = false;
        AbreMenu(true);
    //window.open('Menu.html', '_self').focus();
    }
};
export function AbreMenu(aberto){
    if (aberto == true){
        document.getElementById("jogo").style.display = "none";
        document.getElementById("menu").style.display = "block";
        if (estados.pause == true){
            document.getElementById('btnPlay').innerHTML = "Continuar";
        }
        else{
            ResetaEstados();
            document.getElementById('btnPlay').innerHTML = "Jogar";
        }
        estados.audioRolar = false;
    }
    else{
        document.getElementById("jogo").style.display = "block";
        document.getElementById("menu").style.display = "none";
        estados.audioRolar = true;
        
        if(estados.pause == false){
            ModoRodada(1);
            BackgroundST();
        }
        estados.pause = false;
    }
}
export function ResetaEstados(x){
    /* 
    x = "placar" = reseta tudo menos placar
    */

        estados.estaAtacando = true;
        BackgroundST();
        if (x == "placar"){
            if (estados.derrotado == true){
                estados.derrotaPonto++;
                document.getElementById("placarDerrota").innerHTML = estados.derrotaPonto;
            }
            else{
                estados.vitoriaPonto++;
                document.getElementById("placarVitoria").innerHTML = estados.vitoriaPonto;
            }
        }
        else{
            estados.derrotaPonto = 0;
            document.getElementById("placarDerrota").innerHTML = estados.derrotaPonto;
            estados.vitoriaPonto = 0;
            document.getElementById("placarVitoria").innerHTML = estados.vitoriaPonto;
        }
        estados.podePausar = true;
        estados.estiloP2= false;
        estados.rodada = 0;
        Player1Stats.modos.modoPrime = false;
        document.getElementById("rodada").innerHTML = estados.rodada;
        const bt = document.getElementById("botao");
        bt.removeAttribute("data-bs-target");
        Player1Stats.Aura = 100;
        Player2Stats.Aura = 100;
        Player1Stats.modos.modoPan = false;
        document.getElementById("auraP2").innerHTML = "<b>"+ Player2Stats.Aura+"</b>";
        document.getElementById("auraP1").innerHTML = "<b>"+ Player1Stats.Aura+"</b>";
        estados.estadoRodada = 0;
        estados.CartaRel =1;
        estados.estaAtacando = true;
        ModoRodada(1);
}