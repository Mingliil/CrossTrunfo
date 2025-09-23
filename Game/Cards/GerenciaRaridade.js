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
                return [DeckLenda/*[0], 'lenda'];//*/[Math.floor(Math.random() * DeckLenda.length)], 'lenda'];
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

    //quero = true;
    if (P == "player1"){
        if (quero == true){
            carta[0] = DeckLenda[0];
            SuperIntro(DeckLenda[0]);
        }
        else if (Player1Stats.modos.modoPan == true){
            carta[0] = DeckFull.pandemonium;
            carta[1] = 'lenda';
        }
        if (Player1Stats.modos.modoPrime == true){
            carta[0] = DeckFull.Sisyphus;
            carta[1] = 'lenda';
            Player1Stats.Aura = 200;
            document.getElementById("auraP1").innerHTML = Player1Stats.Aura;
            Player1Stats.modos.modoPrime == false;
        }
        Player1Stats.card = carta[0];
        if (carta[1] == 'lenda' && Player1Stats.ultimacarta.nome != Player1Stats.card.nome){
            SuperIntro(carta[0]);
        }
        
        Carta(Player1Stats.card, "P1");
        if (Player1Stats.card.nome == "Token/Femtanyl"){
            document.getElementById("cartaPoder").innerHTML = "WIRES: " +Player1Stats.card.Status.poder + "<br>";
            document.getElementById("cartaDefesa").innerHTML = "ON MY: " +Player1Stats.card.Status.defesa + "<br>"
            document.getElementById("cartaMagia").innerHTML = "NECK: " +Player1Stats.card.Status.magia + "<br>";
        }
        else{        
            document.getElementById("cartaPoder").innerHTML = "Poder: " +Player1Stats.card.Status.poder + "<br>";
            document.getElementById("cartaDefesa").innerHTML = "Defesa: " +Player1Stats.card.Status.defesa + "<br>";
            document.getElementById("cartaMagia").innerHTML = "Magia: " +Player1Stats.card.Status.magia + "<br>";
        }
        document.getElementById("CartaP1Nome").innerHTML = Player1Stats.card.nome;
        document.getElementById("CartaP1Rari").innerHTML = Player1Stats.card.raridade;
        document.getElementById("CartaP1Desc").innerHTML = Player1Stats.card.descricao;
        Player1Stats.ultimacarta = Player1Stats.card;
        if(Player1Stats.card == DeckFull.pandemonium ){
            Player1Stats.modos.modoPan = true;
        }
        document.getElementById("debug").innerHTML = Player1Stats.ultimacarta.nome +" | "+ Player1Stats.card.nome;
    }
    if (P == "player2"){ 
        Player2Stats.card = carta[0];
        Carta(Player2Stats.card, "P2");
        document.getElementById("debug").innerHTML = carta[0].Status.magia;
    }
    document.getElementById("debug").innerHTML = Player1Stats.modos.modoPan;
}