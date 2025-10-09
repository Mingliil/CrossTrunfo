import { PegaCarta, puxaCarta } from "./GerenciaRaridade.js";
import { estados, Carta, Player1Stats,Player2Stats } from "./Rework.js";
import { EstiloRaro } from "./GerenciaRaridade.js";
import { DeckFull } from "./Cartas.js";
export function ModoRodada(x, perdeu){
    /*
        Estados do x
        x = 1: hora de atacar
        x = 0: proxima rodada
        x = 2: fim
    */
    if (x == 1){
        
        estados.CartaRel--;
        puxaCarta("player1");
        estados.rodada++;
        document.getElementById("rodada").innerHTML = estados.rodada;
        estados.estadoRodada = 1;
        document.getElementById("CartaP2Nome").innerHTML = "";
        document.getElementById("CartaP2Rari").innerHTML = "";
        document.getElementById("CartaP2Desc").innerHTML = "";
        document.getElementById("botao").innerHTML = "ataque";
        puxaCarta("player2");
        Carta(Player2Stats.card, "P2");
        EstiloRaro(Player2Stats.card.raridade, "P2");
    }
    else if (x==0){
        estados.CartaRel++;
        Carta(Player2Stats.card, "P2");
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
        if (estados.derrotado == true){
            estados.derrotaPonto++;
            document.getElementById("placarDerrota").innerHTML = estados.derrotaPonto;
        
        }
        else{
            estados.vitoriaPonto++;
            document.getElementById("placarVitoria").innerHTML = estados.vitoriaPonto;
        }
        estados.estiloP2= false;
        estados.rodada = 0;
        Player1Stats.modos.modoPrime = false;
        document.getElementById("rodada").innerHTML = estados.rodada;
        ModoRodada(1);
        //location.reload();
    }
    if (x==1){
    window.open('Menu.html', '_self').focus();
    }
};