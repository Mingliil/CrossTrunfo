Player1Stats = {
    Aura : 100 
}
Player2Stats = {
    Aura : 100 
}
rodada = 0;

function ataqueP1(){
    Player2Stats.Aura = Player2Stats.Aura - 20;
    document.getElementById("VidaP2").innerHTML = Player2Stats.Aura;
    rodada++;
    document.getElementById("rodada").innerHTML = rodada;
}

function ataqueP2(){
    Player1Stats.Aura = Player1Stats.Aura - 20;
    document.getElementById("VidaP1").innerHTML = Player1Stats.Aura;
    rodada++;
    document.getElementById("rodada").innerHTML = rodada;
}
