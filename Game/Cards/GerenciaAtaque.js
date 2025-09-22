import { Player1Stats,Player2Stats } from "./Rework.js";
import { ModoRodada } from "./GerenciaRodada.js";
import { estados } from "./Rework.js";
/*
    Olá eu, esse código aqui é aonde gerenciaremos não apenas os atques
    mas também as habilidadas das cartas, se der, se não der essa é a vida não? 
*/
export function GerenciaModoAtaque(P){
    //colocar debug inicial aqui se precisar
    //variaveis
    let atacando = false;
    let playerEscolha = 0;
    let ataqueP1= 0;
    let ataqueP2 =0;
    let ataqueResultado = 0;
    const P1Card = Player1Stats.card;
    const P2Card = Player2Stats.card;
    //codigo
    if(document.getElementById("status1").checked || document.getElementById("status2").checked || document.getElementById("status3").checked){
        atacando++;
        if(document.getElementById("status1").checked){
            ataqueP1 = P1Card.Status.poder;
            ataqueP2 = P2Card.Status.poder;
        }
        if(document.getElementById("status2").checked){
            ataqueP1 = P1Card.Status.defesa;
            ataqueP2 = P2Card.Status.defesa;
        }
        if(document.getElementById("status3").checked){
            ataqueP1 = P1Card.Status.magia;
            ataqueP2 = P2Card.Status.magia;
        }
        ataqueResultado = ataqueP1-ataqueP2;

        if (ataqueResultado >0){
            Player2Stats.Aura -= ataqueResultado;
            if (Player2Stats.Aura <= 0){
            document.getElementById("auraP2").innerHTML = 0;
            ModoRodada(2, false);
            }
            else{
                document.getElementById("auraP2").innerHTML = Player2Stats.Aura;
            }
        }
        else if (ataqueResultado <0){
            Player1Stats.Aura -= -ataqueResultado;
            if (Player1Stats.Aura<=0){
                document.getElementById("auraP1").innerHTML = 0;
                ModoRodada(2,true);
            }
            else{
            document.getElementById("auraP1").innerHTML = Player1Stats.Aura;
            }
        }

        else{
            alert("EMPATE!!");
        }
        ModoRodada(0);
    }
    else{
        alert("escolha 1 opção");
    }
}

//ataque antigo, mal feito
export function ataque(P){
    document.getElementById('debug').innerHTML = P;
    const P1card = Player1Stats.card.Status;
    const P2card = Player2Stats.card.Status;
    let escolha = 0;
    let atacando = 0;
    let ataqueP2 = 0;
    let result = 0;
    let curaPlayer = false;
    //cartaRel=0;
     if(estados.estadoRodada == 1){
        estados.estadoRodada = 0;
        if(document.getElementById("status1").checked || document.getElementById("status2").checked || document.getElementById("status3").checked){
        atacando++;
        if(document.getElementById("status1").checked){
            escolha = P1card.poder;
            ataqueP2 = P2card.poder;
        }
        if(document.getElementById("status2").checked){
            escolha = P1card.defesa;
            ataqueP2 = P2card.defesa;
        }
        if(document.getElementById("status3").checked){
            escolha = P1card.magia;
            ataqueP2 = P2card.magia;
        }
        result = escolha - ataqueP2; 
        }
        else{
            alert("escolha 1 opção");
        }
            if (P == "P1" && atacando==1){
                if (Player1Stats.card.nome=="Gaster"){
                    if (escolha < 0){
                    curaPlayer == true;
                    }
                }
                if (result == 0){
                    alert("EMPATE!!");
                    ModoRodada(0);
                }
                else if (result>0){
                    if (curaPlayer == 1){
                        Player1Stats.Aura -= escolha;
                    }
                    else{
                    Player2Stats.Aura -= result;
                    document.getElementById("auraP2").innerHTML = Player2Stats.Aura;
                    }
                    if (Player2Stats.Aura <=0){
                        document.getElementById("Estado").innerHTML = "VENCEU!";
                        document.getElementById("auraP2").innerHTML = 0;
                        if (rodada == 1){
                            document.getElementById("rodada").innerHTML = "PLAYER 1 GAHNOU EM <br>" + rodada+" RODADA";
                            document.getElementById("rodadaFim").innerHTML = "PLAYER 1 GAHNOU EM <br>" + rodada+" RODADA";
                        }
                        else{
                        document.getElementById("rodada").innerHTML = "PLAYER 1 GAHNOU EM <br>" + rodada+" RODADAS";
                        document.getElementById("rodadaFim").innerHTML = "PLAYER 1 GAHNOU EM <br>" + rodada+" RODADAS";
                        }
                        ModoRodada(2);
                    }
                    else{
                        ModoRodada(0);
                    }
                }
                else if (result<0){
                    Player1Stats.Aura -= -result;
                    document.getElementById("auraP1").innerHTML = Player1Stats.Aura;
                    if(Player1Stats.Aura <=0){
                        document.getElementById("Estado").innerHTML = "PERDEU!";
                        document.getElementById("auraP1").innerHTML = 0;
                        if (rodada == 1){
                            document.getElementById("rodada").innerHTML = "PLAYER 2 GAHNOU EM <br>" + rodada+" RODADA";
                            document.getElementById("rodadaFim").innerHTML = "PLAYER 2 GAHNOU EM <br>" + rodada+" RODADA";
                        }
                        else{
                        document.getElementById("rodada").innerHTML = "PLAYER 2 GAHNOU EM <br>" + rodada+" RODADAS";
                        document.getElementById("rodadaFim").innerHTML = "PLAYER 2 GAHNOU EM <br>" + rodada+" RODADAS";
                        }
                        ModoRodada(2);
                    }
                    else{
                        ModoRodada(0);
                }
            }
        }
    }
    else{
        
        ModoRodada(1);
    }
}