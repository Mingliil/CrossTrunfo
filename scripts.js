function soma(){
    let nome = document.getElementById("nome").value;
    let x = parseFloat(document.getElementById("v1").value);
    let y = parseFloat(document.getElementById("v2").value);
    let z = x+y;
    if (nome === "") {
        document.getElementById("Resposta").innerHTML = "";
    } else if (z){
    document.getElementById("Resposta").innerHTML = nome + ", a soma é: " + z;
    }
}
function Divi(){
    let nome = document.getElementById("nome").value;
    let x = parseFloat(document.getElementById("v1").value);
    let y = parseFloat(document.getElementById("v2").value);
    let z = x/y;
    if (nome === "") {
        document.getElementById("Resposta").innerHTML = "";
    } else if (z){
    document.getElementById("Resposta").innerHTML = nome + ", a Divisão é: " + z;
    }

}
function Mult(){
    let nome = document.getElementById("nome").value;
    let x = parseFloat(document.getElementById("v1").value);
    let y = parseFloat(document.getElementById("v2").value);
    let z = x*y;
    if (nome === "") {
        document.getElementById("Resposta").innerHTML = "";
    } else if (x && y !== null){
    document.getElementById("Resposta").innerHTML = nome + ", a Multiplicação é: " + z;
    }
    
}
function Subt(){
    let nome = document.getElementById("nome").value;
    let x = parseFloat(document.getElementById("v1").value);
    let y = parseFloat(document.getElementById("v2").value);
    let z = x-y;
    if (nome === "") {
        document.getElementById("Resposta").innerHTML = "";
    } else if (x && y){
    document.getElementById("Resposta").innerHTML = nome + ", a Subtração é: " + z;
    }

}
function apaga(){
        document.getElementById("Resposta").innerHTML = "";
}