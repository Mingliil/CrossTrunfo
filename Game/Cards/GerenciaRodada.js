import { puxaCarta } from "./GerenciaRaridade.js";
import { estados, Carta, Player1Stats,Player2Stats } from "./Rework.js";

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
    }
    else{
        estados.CartaRel++;
        Carta(Player2Stats.card, "P2");
        document.getElementById("CartaP2Nome").innerHTML = Player2Stats.card.nome;
        document.getElementById("CartaP2Rari").innerHTML = Player2Stats.card.raridade;
        document.getElementById("CartaP2Desc").innerHTML = Player2Stats.card.descricao;  
        document.getElementById("botao").innerHTML = "proxima rodada";

    }
    if (x == 2){
        const bt = document.getElementById("botao");
        bt.setAttribute("data-bs-target","#exampleModal");
        estados.estadoRodada = 2;
        document.getElementById("botao").innerHTML = "main menu";
        if(perdeu == true){
            if (estados.rodada == 1){
                document.getElementById("rodada").innerHTML = "PLAYER 2 GAHNOU EM <br>" + estados.rodada+" RODADA";
                document.getElementById("rodadaFim").innerHTML = "PLAYER 2 GAHNOU EM <br>" + estados.rodada+" RODADA";
            }
            else{
            document.getElementById("rodada").innerHTML = "PLAYER 2 GAHNOU EM <br>" + estados.rodada+" RODADAS";
            document.getElementById("rodadaFim").innerHTML = "PLAYER 2 GAHNOU EM <br>" + estados.rodada+" RODADAS";
            }
        }
        else{
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

}

export function fim(x){
    if (x==0){
    location.reload();
    }
    if (x==1){
    window.open('Menu.html', '_self').focus();
    }
};