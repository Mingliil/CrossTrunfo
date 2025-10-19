import {DeckPlayer,  DeckRaro ,DeckEpico ,DeckLenda, DeckFull} from "./Cartas.js";
import { Player1Stats, Player2Stats, estados } from "./Rework.js";
import { Carta, RolarCarta } from "./Rework.js";
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
export function Raridade(P){

    let raro  = 0;
    let epico = 0;
    let lenda = 0;
    if (P == "P1"){
        raro = Math.floor(Math.random() * (20-Player1Stats.raridades.raro));
        epico= Math.floor(Math.random() * (60-Player1Stats.raridades.epico));
        lenda= Math.floor(Math.random() * (100-Player1Stats.raridades.lenda));
    }
    else{
        raro = Math.floor(Math.random() * (20-Player2Stats.raridades.raro));
        epico= Math.floor(Math.random() * (60-Player2Stats.raridades.epico));
        lenda= Math.floor(Math.random() * (100-Player2Stats.raridades.lenda));
    }
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

export function PegaCarta(P){
    let nivelCarta = ""//Raridade();
    if (P =="P1")
        nivelCarta = Raridade("P1");
    else{
        nivelCarta = Raridade("P2");
    }
    switch (nivelCarta) {
        case 'lenda':
            return [DeckLenda/*[0], 'lenda'];//*/[Math.floor(Math.random() * DeckLenda.length)], 'LENDA'];
            break;

        case 'epico':
            return [DeckEpico[Math.floor(Math.random() * DeckEpico.length)],'ÉPICO'];
            break;

        case 'raro':
            return [DeckRaro[Math.floor(Math.random() * DeckRaro.length)],'RARO'];
            break;

        default:
            return [DeckPlayer[Math.floor(Math.random() * DeckPlayer.length)],'COMUM'];
            break;
    }
}

export function puxaCarta(P, especial){
    let carta = [0,0]
    
    
    //carta[0] = DeckFull.Gaster;
    //quero = true;
    if (P == "player1"){
        carta = PegaCarta("P1");
        //carta = [DeckEpico[0],'ÉPICO']
        if (carta[0].nome == "Gaster"){
            GasterRandom();
        }
        
        else if (Player1Stats.modos.modoPan == true){
            carta[0] = DeckFull.pandemonium;
            carta[1] = 'LENDA';
        }
        if (Player1Stats.modos.modoPrime == true){
            carta[0] = DeckFull.Sisyphus;
            carta[1] = 'LENDA';
            Player1Stats.Aura = 200;
            document.getElementById("auraP1").innerHTML = Player1Stats.Aura;
        }
        Player1Stats.card = carta[0];
        if (carta[1] == 'LENDA' && Player1Stats.ultimacarta.nome != Player1Stats.card.nome){
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
            const drip = Math.floor(Math.random() * 35);
            if (drip == 0){
                PureAuraAndDrip("P1");
                carta[1] = 'ÉPICO';
            }
        }
        if (carta[0]==DeckFull.Spam){
            SuperIntro(carta[0]);
        }
        if (carta[0]==DeckFull.TVTIME){
            SuperIntro(carta[0]);
        }
        RolarCarta("P1");
        //Carta(Player1Stats.card, "P1");
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
        EstiloRaro(carta[1], "P1");
        switch (carta[1]) {
            case "LENDA":
                Player1Stats.raridades.raro++;
                Player1Stats.raridades.epico++;
                Player1Stats.raridades.lenda = 0;
                break;
            case "ÉPICO":
                Player1Stats.raridades.raro++;
                Player1Stats.raridades.epico = 0;
                Player1Stats.raridades.lenda++;
                break;
            case "RARO":
                Player1Stats.raridades.raro=0;
                Player1Stats.raridades.epico++;
                Player1Stats.raridades.lenda++;
                break;
            default:
                Player1Stats.raridades.raro+=2;
                Player1Stats.raridades.epico+=2;
                Player1Stats.raridades.lenda+=2;
                break;
        }
    }

    //Player 2
    if (P == "player2"){ 

        carta = PegaCarta("P2");
        //carta[0] = DeckFull.Goku;
        if (Player1Stats.modos.quero == true){
            //carta[0] = DeckLenda[[Math.floor(Math.random() * DeckLenda.length)]];
            carta[1] = 'LENDA';
            carta[0] = DeckFull.Goku;
            Player1Stats.modos.quero = false;
        }
        
        
        Player2Stats.card = carta[0];
        document.getElementById("debug").innerHTML =Player2Stats.card.nome
        if (carta[0].nome == "Gaster"){
            GasterRandom();
        }
       switch (carta[1]) {
            case "LENDA":
                Player2Stats.raridades.raro++;
                Player2Stats.raridades.epico++;
                Player2Stats.raridades.lenda = 0;
                break;
            case "ÉPICO":
                Player2Stats.raridades.raro++;
                Player2Stats.raridades.epico = 0;
                Player2Stats.raridades.lenda++;
                break;
            case "RARO":
                Player2Stats.raridades.raro=0;
                Player2Stats.raridades.epico++;
                Player2Stats.raridades.lenda++;
                break;
            default:
                Player2Stats.raridades.raro +=2;
                Player2Stats.raridades.epico+=2;
                Player2Stats.raridades.lenda+=2;
                break;
        }
        
    }    
}