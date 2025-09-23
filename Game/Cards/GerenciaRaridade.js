import {DeckPlayer,  DeckRaro ,DeckEpico ,DeckLenda, DeckFull} from "./Cartas.js";
import { Player1Stats, Player2Stats } from "./Rework.js";
import { Carta } from "./Rework.js";
import { SuperIntro } from "./GerenciaAudio.js";
/*
    como apemas EU faço as coisas aqui, ao menos no codigo, vou deixar certas "cartas" para eu me lembrar o que fazer
    o GerenciaRaridade é aonde as cartas são puxadas e aonde vai ser como a raridade será gerenciada, ou será que eu deveria
    fazer o puxaCarta em outro lugar?
*/

export function Raridade(){
    let raro = Math.floor(Math.random() * 24);
    let epico = Math.floor(Math.random() * 74);
    let lenda = Math.floor(Math.random() * 100);
    if (lenda == 0){
        return "lenda";
    }
    else if(epico == 0){
        return "epico";
    }
    else if(raro == 0){
        return "raro";
    }
    else{
        return "comum";
    }
}

export function PegaCarta(debug){
    let nivelCarta = Raridade();
    if (debug == true){
        nivelCarta = 'lenda';
    }
    else{
        switch (nivelCarta) {
            case 'lenda':
                return [DeckLenda[Math.floor(Math.random() * DeckLenda.length)], 'lenda'];
                break;

            case 'epico':
                return [DeckEpico[Math.floor(Math.random() * DeckEpico.length)],'epico'];
                break;

            case 'raro':
                return [DeckRaro[Math.floor(Math.random() * DeckRaro.length)],'raro'];
                break;

            default:
                return [DeckPlayer[Math.floor(Math.random() * DeckPlayer.length)],'comum'];
                break;
        }
    }
}

export function puxaCarta(P, especial, quero){

    let carta = PegaCarta();
    if (quero == true){
        carta = [DeckFull.pandemonium, 'lenda'];
    }

    if (P == "player1"){
        if(Player1Stats.modos.modoPan == true){
            Player1Stats.card = DeckFull.pandemonium;
        }
        if (especial == "prime"){
            Player1Stats.card = DeckFull.Sisyphus;
            Player1Stats.modos.modoPrime = true;
            Player1Stats.Aura = 200;
        }
        else if (Player1Stats.modos.modoPrime == true){
            Player1Stats.card = DeckFull.Sisyphus;
            Player1Stats.modos.modoPrime = false;
        }
        else{
        Player1Stats.card = carta[0];
        }
        if (carta[1] == 'lenda' && Player1Stats.ultimacarta.nome != Player1Stats.card.nome){
            SuperIntro(carta[0]);
        }
        
        Carta(Player1Stats.card, "P1");
        document.getElementById("CartaP1Nome").innerHTML = Player1Stats.card.nome;
        document.getElementById("CartaP1Rari").innerHTML = Player1Stats.card.raridade;
        document.getElementById("CartaP1Desc").innerHTML = Player1Stats.card.descricao;        
        document.getElementById("cartaPoder").innerHTML = "Poder: " +Player1Stats.card.Status.poder + "<br>";
        document.getElementById("cartaDefesa").innerHTML = "Defesa: " +Player1Stats.card.Status.defesa + "<br>";
        document.getElementById("cartaMagia").innerHTML = "Magia: " +Player1Stats.card.Status.magia + "<br>";
        Player1Stats.ultimacarta = Player1Stats.card;
        document.getElementById("debug").innerHTML = Player1Stats.ultimacarta.nome +" | "+ Player1Stats.card.nome;
        if(Player1Stats.card.nome == "PANDEMONIUM"){
            Player1Stats.modos.modoPan = true;
        }
    }
    if (P == "player2"){
        
        Player2Stats.card = carta[0];
        Carta(Player2Stats.card, "P2");
        document.getElementById("debug").innerHTML = carta[0].Status.magia;
    }
    document.getElementById("debug").innerHTML = Player1Stats.modos.modoPan;
}