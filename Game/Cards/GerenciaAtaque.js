import { Player1Stats,Player2Stats } from "./Rework.js";
import { ModoRodada } from "./GerenciaRodada.js";
import { puxaCarta } from "./GerenciaRaridade.js";
import { estados } from "./Rework.js";
import { DeckFull } from "./Cartas.js";
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
        
        if(Player1Stats.card.nome == "Token/Femtanyl"){
            alert("HAHAHA");
            Player1Stats.modos.curaDano = true;
            Player1Stats.modos.curaTempo = 5;
        }
        else{
            if (ataqueResultado >0){
                if (Player1Stats.modos.modoPrime == true){
                    Player2Stats.Aura -=  ataqueP1+ataqueP2
                }
                else{
                    Player2Stats.Aura -= ataqueResultado;
                }
                if (P1Card.podeCurar == true){
                    if (P1Card.nome == "Gaster"){
                        Player1Stats.Aura +=  Math.floor(ataqueResultado/2);
                    }
                    Player1Stats.Aura +=  Math.floor(ataqueResultado/3);
                }
                else if (Player1Stats.modos.curaDano == true){
                    Player1Stats.Aura +=  Math.floor(ataqueResultado/3);
                    Player1Stats.modos.curaTempo --;
                    if (Player1Stats.modos.curaTempo <= 0){
                        Player1Stats.modos.curaDano = false;
                        Player1Stats.modos.curaTempo = 5;
                    }
                }

                if (Player2Stats.Aura <= 0){ //vitoria
                document.getElementById("auraP2").innerHTML = 0;
                ModoRodada(2, false);
                }
                else{
                    document.getElementById("auraP2").innerHTML = Player2Stats.Aura;
                    document.getElementById("auraP1").innerHTML = Player1Stats.Aura;
                }
            }
            else if (ataqueResultado <0){
                if (Player1Stats.modos.modoPrime == true){
                    Player2Stats.Aura -=  ataqueP1+ataqueP2
                }
                else{
                    Player1Stats.Aura -= -ataqueResultado;
                }
                if (P2Card.podeCurar == true){
                    if (P2Card.nome == "Gaster"){
                        Player1Stats.Aura +=  Math.floor(ataqueResultado/2);
                    }
                    Player2Stats.Aura -= Math.floor(ataqueResultado/3);
                }
                if (Player1Stats.Aura<=0){ //derrota
                    document.getElementById("auraP1").innerHTML = 0;
                    if (Player1Stats.modos.modoPan == true){
                        Player1Stats.modos.modoPrime = true;
                        Player1Stats.modos.modoPan = false;
                    }
                    else{
                    ModoRodada(2,true);
                    }
                }
                else{
                    document.getElementById("auraP2").innerHTML = Player2Stats.Aura;
                    document.getElementById("auraP1").innerHTML = Player1Stats.Aura;
                }
            }
            else{
            alert("EMPATE!!");
            }
        }
        ModoRodada(0);
    }
    else{
        alert("escolha 1 opção");
    }
}
