import {DeckPlayer,  DeckRaro ,DeckEpico ,DeckLenda, DeckFull} from "./Cartas.js";
import { Player1Stats, Player2Stats, estados } from "./Rework.js";
import { Carta } from "./Rework.js";
import { SuperIntro } from "./GerenciaAudio.js";
import { GasterRandom, imsad, PureAuraAndDrip } from "./GerenciaEspeciais.js";
/*
    como apemas EU faço as coisas aqui, ao menos no codigo, vou deixar certas "cartas" para eu me lembrar o que fazer
    o GerenciaRaridade é aonde as cartas são puxadas e aonde vai ser como a raridade será gerenciada, ou será que eu deveria
    fazer o puxaCarta em outro lugar?
*/
export function EstiloRaro(x, p){
    const P1Desc = document.getElementById("CartaP1Rari");
    const P2Desc = document.getElementById("CartaP2Rari");
    P2Desc.classList.remove("border-success");
    P1Desc.classList.remove("border-2");
    switch (x) {
        case '???':
             if(p == "P2"){
                if(estados.estiloP2== false){
                    P2Desc.classList.remove("border-success");
                    P2Desc.classList.remove("border-2");
                    P2Desc.classList.remove("border");
                    P2Desc.classList.remove("bg-light");
                    P2Desc.classList.remove("text-dark");
                    P2Desc.classList.remove("rounded");
                }
                else if (estados.estiloP2== true){
                    P2Desc.classList.add("border-success");
                    P2Desc.classList.add("border-2");
                    P2Desc.classList.add("border");
                    P2Desc.classList.add("bg-light");
                    P2Desc.classList.add("text-dark");
                    P2Desc.classList.add("rounded");
                }
            }
            else{
                P1Desc.classList.remove(...P1Desc.classList);
                P1Desc.classList.add("border-success");
                P1Desc.classList.add("border-2");
                P1Desc.classList.add("border");
                P1Desc.classList.add("bg-warning");
                P1Desc.classList.add("text-dark");
                P1Desc.classList.add("strong");
                P1Desc.classList.add("rounded");
            }
            break;
        case 'SuperTrunfo':
            if(p == "P2"){
                if(estados.estiloP2== false){
                    P2Desc.classList.remove("border-success");
                    P2Desc.classList.remove("border-2");
                    P2Desc.classList.remove("border");
                    P2Desc.classList.remove("bg-light");
                    P2Desc.classList.remove("text-dark");
                    P2Desc.classList.remove("rounded");
                }
                else if (estados.estiloP2== true){
                    P2Desc.classList.add("border-success");
                    P2Desc.classList.add("border-2");
                    P2Desc.classList.add("border");
                    P2Desc.classList.add("bg-light");
                    P2Desc.classList.add("text-dark");
                    P2Desc.classList.add("rounded");
                }
            }
            else{
                P1Desc.classList.remove(...P1Desc.classList);
                P1Desc.classList.add("border-success");
                P1Desc.classList.add("border-2");
                P1Desc.classList.add("border");
                P1Desc.classList.add("bg-warning");
                P1Desc.classList.add("text-dark");
                P1Desc.classList.add("strong");
                P1Desc.classList.add("rounded");
            }
            break;
        case 'ÉPICO':
            if(p == "P2"){
                if(estados.estiloP2== false){
                    P2Desc.classList.remove(...P2Desc.classList);
                }
                else if (estados.estiloP2== true){
                    P2Desc.classList.add("border-warning");
                    P2Desc.classList.add("border-2");
                    P2Desc.classList.add("border");
                    P2Desc.classList.add("bg-danger");
                    P2Desc.classList.add("text-white");
                    P2Desc.classList.add("rounded");
                }
            }
            else{
                P1Desc.classList.remove(...P1Desc.classList);
                P1Desc.classList.add("border-warning");
                P1Desc.classList.add("border-2");
                P1Desc.classList.add("border");
                P1Desc.classList.add("bg-danger");
                P1Desc.classList.add("text-white");
                P1Desc.classList.add("rounded");
            }
            break;
        case 'RARO':
            if(p == "P2"){
                if(estados.estiloP2== false){
                    P2Desc.classList.remove(...P2Desc.classList);
                }
                else if (estados.estiloP2== true){
                    P2Desc.classList.add("border-info");
                    P2Desc.classList.add("border-2");
                    P2Desc.classList.add("border");
                    P2Desc.classList.add("bg-primary");
                    P2Desc.classList.add("text-white");
                    P2Desc.classList.add("rounded");
                }
            }
            else{
                P1Desc.classList.remove(...P1Desc.classList);
                P1Desc.classList.add("border-info");
                P1Desc.classList.add("border-2");
                P1Desc.classList.add("border");
                P1Desc.classList.add("bg-primary");
                P1Desc.classList.add("text-white");
                P1Desc.classList.add("rounded");
            }
            break;
        case 'COMUM':
            if(p == "P2"){
                if(estados.estiloP2== false){
                    P2Desc.classList.remove(...P2Desc.classList);
                }
                else if (estados.estiloP2== true){
                    P2Desc.classList.add("border-light");
                    P2Desc.classList.add("border-2");
                    P2Desc.classList.add("border");
                    P2Desc.classList.add("bg-secondary");
                    P2Desc.classList.add("text-white");
                    P2Desc.classList.add("rounded");
                }
            }
            else{
                P1Desc.classList.remove(...P1Desc.classList);
                P1Desc.classList.add("border-light");
                P1Desc.classList.add("border-2");
                P1Desc.classList.add("border");
                P1Desc.classList.add("bg-secondary");
                P1Desc.classList.add("text-white");
                P1Desc.classList.add("rounded");
            }
            break;
        default:
        break;
    }
}
export function Raridade(){
    let raro = Math.floor(Math.random() * 20);
    let epico = Math.floor(Math.random() * 60);
    let lenda = Math.floor(Math.random() * 100);
    //lenda = 0;
    if (lenda == 0){
        return 'lenda';
    }
    else if(epico == 0){
        return 'epico';
    }
    else if(raro == 0){
        return 'raro';
    }
    else{
        return 'comum';
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

export function puxaCarta(P, especial){

    let carta = PegaCarta();
    //carta[0] = DeckFull.Gaster;
    //quero = true;
    if (P == "player1"){
        carta[0]=DeckFull.Goku;
        //carta[0] = DeckFull.YAAI;
        if (carta[0].nome == "Gaster"){
            GasterRandom();
        }
        if (Player1Stats.modos.quero == true){
            carta[0] = DeckFull.EXE;
            carta[1] = 'lenda';
            Player1Stats.modos.quero = false;
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
        }
        Player1Stats.card = carta[0];
        if (carta[1] == 'lenda' && Player1Stats.ultimacarta.nome != Player1Stats.card.nome){
            SuperIntro(carta[0]);
        }
        if (carta[0] == DeckFull.EXE){
            const sad = Math.floor(Math.random() * 20);
            if (sad == 0){
                imsad();
                carta[1] = '???';
            }
        }
        if (carta[0]== DeckFull.Goku){
            const drip = Math.floor(Math.random() * 10);
            if (drip == 0){
                PureAuraAndDrip();
                carta[1] = 'ÉPICO';
            }
        }
        Carta(Player1Stats.card, "P1");
        if (Player1Stats.card.nome == "Token/Femtanyl"){
            document.getElementById("cartaPoder").innerHTML = "WIRES: " +1999 + "<br>";
            document.getElementById("cartaDefesa").innerHTML = "ON MY: " + 1999 + "<br>"
            document.getElementById("cartaMagia").innerHTML = "NECK: " + 1999 + "<br>";
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
        document.getElementById("debug").innerHTML = Player1Stats.modos.curaDano;
        if(carta[0]== DeckFull.Goku){
        EstiloRaro("ÉPICO", "P1");
        }
        EstiloRaro(Player1Stats.card.raridade, "P1");
    }
    if (P == "player2"){ 
        if (carta[0].nome == "Gaster"){
            GasterRandom();
        }
        Player2Stats.card = carta[0];

        Carta(Player2Stats.card, "P2"); 
        document.getElementById("debug").innerHTML = carta[0].Status.magia;
        
    }
    document.getElementById("debug").innerHTML = Player1Stats.modos.curaDano + " | "+Player1Stats.modos.curaTempo;
    
}