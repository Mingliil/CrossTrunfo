export let CartaRel=0;
export function EstadoRodada(x){
    if (x == 1){
        CartaRel--;
        puxaCarta("player1");
        rodada++;
        document.getElementById("rodada").innerHTML = rodada;
        estadoRodada = 1;
        document.getElementById("CartaP2Nome").innerHTML = "";
        document.getElementById("CartaP2Rari").innerHTML = "";
        document.getElementById("CartaP2Desc").innerHTML = "";
        document.getElementById("botao").innerHTML = "ataque";
        puxaCarta("player2");
    }
    else{
        CartaRel++;
        Carta(Player2Stats.card, "P2");
        document.getElementById("CartaP2Nome").innerHTML = Player2Stats.card.nome;
        document.getElementById("CartaP2Rari").innerHTML = Player2Stats.card.raridade;
        document.getElementById("CartaP2Desc").innerHTML = Player2Stats.card.descricao;  
        document.getElementById("botao").innerHTML = "proxima rodada";

    }
    if (x == 2){
        const bt = document.getElementById("botao");
        bt.setAttribute("data-bs-target","#exampleModal");
        estadoRodada = 2;
        document.getElementById("botao").innerHTML = "main menu";
    }
}