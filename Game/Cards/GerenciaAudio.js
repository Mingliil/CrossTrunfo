import { Player1Stats, Player2Stats } from "./Rework.js";
import { estados } from "./Rework.js";

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

}