import { Player1Stats, Player2Stats } from "./Rework.js";
import { estados } from "./Rework.js";
import { playList } from "./musicas.js";
export function AudioST(carta){
    const audio = document.getElementById("audioST");
    const AudioScr = document.getElementById("audioSTSrc");
    AudioScr.type = "audio/mp3";
    AudioScr.src = Player1Stats.card.AudioST;
        audio.load();
        audio.play();
}
export function SuperIntro(carta){
    
    AudioST(carta);
    const audio = document.getElementById("audio");
    const AudioScr = document.getElementById("audioScr");
    AudioScr.type = "audio/mp3";
    AudioScr.src = Player1Stats.card.Audiofont; 
        audio.load();
        audio.play();
    if (estados.audioRolar == 0){
        estados.audioRolar = 1;
    }
}


export function BackgroundST(){
    const PlaylistChoice = playList[Math.floor(Math.random() * playList.length)];
    const audio = document.getElementById("audioST");
    const AudioScr = document.getElementById("audioSTSrc");
    const CreditosDesc = document.getElementById("creditosST");
    const CreditosNome = document.getElementById("creditosNm");
    const AlertaOst = document.getElementById("ostDetails")
    if (PlaylistChoice == estados.ultimaST){
        BackgroundST();
        return null;
    }
    AudioScr.type = "audio/mp3";
    AudioScr.src = PlaylistChoice.ST;
        audio.load();
        audio.play();
    CreditosNome.innerHTML = PlaylistChoice.Nome;
    CreditosDesc.innerHTML = PlaylistChoice.Creditos;
    AlertaOst.classList.remove(...AlertaOst.classList);
    AlertaOst.classList.add("visible");
    AlertaOst.classList.add("alert");
    AlertaOst.classList.add("alert-primary");
    AlertaOst.classList.add("overlayST");

    setTimeout(function(){
       // AlertaOst.classList.remove(...AlertaOst.classList);
        AlertaOst.classList.add("desapareça");
    }, 10000)
    estados.ultimaST = PlaylistChoice;
}
