import {DeckPlayer,  DeckRaro ,DeckEpico ,DeckLenda} from "./Cartas.js";
let Player1Stats = {
    Aura : 100,
    card: 0
};
let Player2Stats = {
    Aura : 100,
    card: 0
};

let rodada = 0;
let estadoRodada = 0;
let CartaRel=1; //0 = escondido - 1 =revelado
export function fim(x){
    if (x==0){
    location.reload();
    }
    if (x==1){
    window.open('Menu.html', '_self').focus();
    }
};

export function ataque(P){
    document.getElementById('debug').innerHTML = P;
    const P1card = Player1Stats.card.Status;
    const P2card = Player2Stats.card.Status;
    let escolha = 0;
    let atacando = 0;
    let ataqueP2 = 0;
    let result = 0;
    let curaPlayer = false;
    //cartaRel=0;
    if (estadoRodada == 2){
        const bt = document.getElementById("botao");
       bt.setAttribute("data-bs-target","#exampleModal");
    }
    else if(estadoRodada == 1){
        estadoRodada = 0;
        if(document.getElementById("status1").checked || document.getElementById("status2").checked || document.getElementById("status3").checked){
        atacando++;
        if(document.getElementById("status1").checked){
            escolha = P1card.poder;
            ataqueP2 = P2card.poder;
        }
        if(document.getElementById("status2").checked){
            escolha = P1card.defesa;
            ataqueP2 = P2card.defesa;
        }
        if(document.getElementById("status3").checked){
            escolha = P1card.magia;
            ataqueP2 = P2card.magia;
        }
        result = escolha - ataqueP2; 
        }
        else{
            alert("escolha 1 opção");
        }
            if (P == "P1" && atacando==1){
                if (Player1Stats.card.nome=="Gaster"){
                    if (escolha < 0){
                    curaPlayer == true;
                    }
                }
                if (result == 0){
                    alert("EMPATE!!");
                    EstadoRodada(0);
                }
                else if (result>0){
                    if (curaPlayer == 1){
                        Player1Stats.Aura -= escolha;
                    }
                    else{
                    Player2Stats.Aura -= result;
                    document.getElementById("auraP2").innerHTML = Player2Stats.Aura;
                    }
                    if (Player2Stats.Aura <=0){
                        document.getElementById("Estado").innerHTML = "VENCEU!";
                        document.getElementById("auraP2").innerHTML = 0;
                        if (rodada == 1){
                            document.getElementById("rodada").innerHTML = "PLAYER 1 GAHNOU EM <br>" + rodada+" RODADA";
                            document.getElementById("rodadaFim").innerHTML = "PLAYER 1 GAHNOU EM <br>" + rodada+" RODADA";
                        }
                        else{
                        document.getElementById("rodada").innerHTML = "PLAYER 1 GAHNOU EM <br>" + rodada+" RODADAS";
                        document.getElementById("rodadaFim").innerHTML = "PLAYER 1 GAHNOU EM <br>" + rodada+" RODADAS";
                        }
                        EstadoRodada(2);
                    }
                    else{
                        EstadoRodada(0);
                    }
                }
                else if (result<0){
                    if (curaPlayer == 1){
                        Player1Stats.Aura += -(escolha);
                    }
                    else{
                    Player1Stats.Aura -= -result;
                    document.getElementById("auraP1").innerHTML = Player1Stats.Aura;
                    }
                    if(Player1Stats.Aura <=0){
                        document.getElementById("Estado").innerHTML = "PERDEU!";
                        document.getElementById("auraP1").innerHTML = 0;
                        if (rodada == 1){
                            document.getElementById("rodada").innerHTML = "PLAYER 2 GAHNOU EM <br>" + rodada+" RODADA";
                            document.getElementById("rodadaFim").innerHTML = "PLAYER 2 GAHNOU EM <br>" + rodada+" RODADA";
                        }
                        else{
                        document.getElementById("rodada").innerHTML = "PLAYER 2 GAHNOU EM <br>" + rodada+" RODADAS";
                        document.getElementById("rodadaFim").innerHTML = "PLAYER 2 GAHNOU EM <br>" + rodada+" RODADAS";
                        }
                        EstadoRodada(2);
                    }
                    else{
                        EstadoRodada(0);
                }
            }
        }
    }
    else{
        
        EstadoRodada(1);
    }
}

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

let comecou = 1;

export function SuperTrunfo(carta){
    const audio = document.getElementById("audio");
    const AudioScr = document.getElementById("audioScr");
    AudioScr.type = carta.AudioType;
    AudioScr.src = Player1Stats.card.Audiofont;
    //audio.onload = () =>{  
        audio.load();
        audio.play();
    //}
    //window.onload = audio.play();
}

export function Carta(carta, P){
   /* const cardDesc = document.getElementById('CartaP1Desc');
    const contextoDesc = canvas.getContext('2d');
    const imgDesc = new Image();
    imgDesc.src = carta.Atlas;*/
    let canvas;
    let img = new Image();
    
    if (P == "P1"){
    canvas = document.getElementById('CartaP1');
    img.src = carta.Atlas;
    document.getElementById("CartaP1").style.width = carta.ImgTamanho;
    }

    if (P == "P2"){
    canvas = document.getElementById('CartaP2');
        if (CartaRel == 0){
        img.src = 'Assets/ExemploCartaFundo.png';
        }
        else{
        img.src = Player2Stats.card.Atlas;
        }
    } 
    debug();
    const ctx = canvas.getContext('2d');
    
    img.onload = () => {
        let sourceX = carta.CoordsX;
        let sourceY = carta.CoordsY; 
        let sourceWidth = carta.AlturaX;
        let sourceHeight = carta.AlturaY;
        if (P == "P1"){
            sourceX = carta.CoordsX;
            sourceY = carta.CoordsY; 
            sourceWidth = carta.AlturaX;
            sourceHeight = carta.AlturaY;
        }
        if (P == "P2"){
            if (CartaRel == 0){
                sourceX = 0;
                sourceY = 0; 
                sourceWidth = 373;
                sourceHeight =519; 
            }
            else{
                sourceX = carta.CoordsX;
                sourceY = carta.CoordsY; 
                sourceWidth = carta.AlturaX;
                sourceHeight = carta.AlturaY;
            }
        }

        // Define the destination rectangle (x, y, width, height) on the canvas
        const destX = 0; // X-coordinate on the canvas to draw the part
        const destY = 0; // Y-coordinate on the canvas to draw the part
        const destWidth = sourceWidth; // Width to draw on the canvas (can be scaled)
        const destHeight = sourceHeight; // Height to draw on the canvas (can be scaled)

        // Set canvas dimensions if needed
        canvas.width = destWidth;
        canvas.height = destHeight;
        ctx.drawImage(
            img,
            sourceX,
            sourceY,
            sourceWidth,
            sourceHeight,
            destX,
            destY,
            destWidth,
            destHeight
        );

    };

}

export function puxaCarta(P){
    let comum = Math.floor(Math.random() * DeckPlayer.length);
    let raro = Math.floor(Math.random() * 24);
    let epico = Math.floor(Math.random() * 74);
    let lenda = Math.floor(Math.random() * 100);
    lenda = 0;
    if (P == "player1"){
        let c = 0;
        if (lenda == 0){
            c = 0;
            Player1Stats.card = DeckLenda[0];//[Math.floor(Math.random() * DeckLenda.length)];
            Carta(Player1Stats.card, "P1");
            SuperTrunfo(Player1Stats.card); 
        }
        else if (epico == 0){
            Player1Stats.card = DeckEpico[Math.floor(Math.random() * DeckEpico.length)];
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
    }
    if (P == "player2"){
        let c2 = comum;
        Player2Stats.card = DeckPlayer[c2];
        Carta(Player2Stats.card, "P2");
    }
}
export function debug(){
    document.getElementById('debug').innerHTML = Player1Stats.card.nome;
    document.getElementById('debug').innerHTML = CartaRel;
}
window.onload = EstadoRodada(1);
window.onload = puxaCarta("player2");
window.onload = puxaCarta("player1");
