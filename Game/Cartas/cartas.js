var cartaTeste = {
    id:0,
    y:1,
    x:1,
}
var PlayerDeck = {
    cards:0,
    order:[],
}

}
function randomizeDeck(){
    for (let i = 0; i <= PlayerDeck.cards; i++) {
    order[i] = i;
    }
    document.getElementById(teste).innerText(order)
}