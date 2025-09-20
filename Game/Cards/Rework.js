export function debug() {
    let btDebug = document.getElementById("btDebug");
    btDebug.innerHTML = "funciona";
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
           /* if (CartaRel == 0){
                sourceX = 0;
                sourceY = 0; 
                sourceWidth = 373;
                sourceHeight =519; 
            }*/
           // else{
                sourceX = carta.CoordsX;
                sourceY = carta.CoordsY; 
                sourceWidth = carta.AlturaX;
                sourceHeight = carta.AlturaY;
           // }
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

    if (P == "player1"){
        let c = 0;
        if (lenda == 0){
            c = 0;
            Player1Stats.card = DeckLenda[Math.floor(Math.random() * DeckLenda.length)];
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