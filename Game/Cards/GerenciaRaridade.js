import {DeckPlayer,  DeckRaro ,DeckEpico ,DeckLenda} from "./Cartas.js";
import { Player1Stats, Player2Stats } from "./Rework.js";
import { Carta } from "./Rework.js";
import { SuperIntro } from "./GerenciaAudio.js";
/*
    como apemas EU faço as coisas aqui, ao menos no codigo, vou deixar certas "cartas" para eu me lembrar o que fazer
    o GerenciaRaridade é aonde as cartas são puxadas e aonde vai ser como a raridade será gerenciada, ou será que eu deveria
    fazer o puxaCarta em outro lugar?
*/
export function puxaCarta(P){
    let comum = Math.floor(Math.random() * DeckPlayer.length);
    let raro = Math.floor(Math.random() * 24);
    let epico = Math.floor(Math.random() * 74);
    let lenda = Math.floor(Math.random() * 100);
    epico = 0;
    if (P == "player1"){
        let c = 0;
        if (Player1Stats.ultimaCarta == DeckLenda[1]){
        }
        else if (lenda == 0){
            c = 0;
            Player1Stats.card = DeckLenda[Math.floor(Math.random() * DeckLenda.length)];
            Carta(Player1Stats.card, "P1");
            if(Player1Stats.ultimaCarta != Player1Stats.card){
            SuperIntro(Player1Stats.card);
            }
        }
        else if (epico == 0){
            Player1Stats.card = DeckEpico[0];//[Math.floor(Math.random() * DeckEpico.length)];
            Carta(Player1Stats.card, "P1");
        }
        else if (raro == 0){
            Player1Stats.card =  DeckRaro[Math.floor(Math.random() * DeckRaro.length)];
            Carta(Player1Stats.card, "P1");
        }
        else{
            c = comum;
            Player1Stats.card = DeckPlayer[c];
            Carta(Player1Stats.card, "P1");
        }
        if (Player1Stats.card.nome == "Gaster"
        ){  
        let cura = Math.floor(Math.random() * 10);
        if(cura == 0){
             Player1Stats.card.Status.poder -= Math.floor(Math.random() * 101);
        }
        else{
             Player1Stats.card.Status.poder = Math.floor(Math.random() * 101);
        }
        if(cura == 6){
             Player1Stats.card.Status.defesa -= Math.floor(Math.random() * 101);
        }
        else{
             Player1Stats.card.Status.defesa = Math.floor(Math.random() * 101);
        }
        if(cura == 9){
             Player1Stats.card.Status.magia -= Math.floor(Math.random() * 101);
        }
        else{
             Player1Stats.card.Status.magia -= Math.floor(Math.random() * 101);
        }
        }
        document.getElementById("CartaP1Nome").innerHTML = Player1Stats.card.nome;
        document.getElementById("CartaP1Rari").innerHTML = Player1Stats.card.raridade;
        document.getElementById("CartaP1Desc").innerHTML = Player1Stats.card.descricao;        
        document.getElementById("cartaPoder").innerHTML = "Poder: " +Player1Stats.card.Status.poder + "<br>";
        document.getElementById("cartaDefesa").innerHTML = "Defesa: " +Player1Stats.card.Status.defesa + "<br>";
        document.getElementById("cartaMagia").innerHTML = "Magia: " +Player1Stats.card.Status.magia + "<br>";
    Player1Stats.ultimaCarta = Player1Stats.card;
    }
    if (P == "player2"){
        let c2 = comum;
        Player2Stats.card = DeckPlayer[c2];
        Carta(Player2Stats.card, "P2");
    }
}