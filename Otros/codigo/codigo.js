function a(min, max) {return Math.floor(Math.random() * (max - min + 1) + min)}

function eleccion (jugada) {
    let resultado;
    if(jugada == 1) resultado = "Piedra";
    else if(jugada == 2) resultado = "Papel";
    else if(jugada == 3) resultado = "Tijera";
    else resultado = "MAL";
    return resultado
}

    //1 es piedra, 2 es papel, 3 es tijera
    let jugador = 0
    let pc = 0 
    let win = 0
    let lost = 0

while (win < 2 && lost < 2) {

    pc = a(1, 3)
    jugador = prompt("Elije: 1 para Piedra, 2 para Papel, 3 para Tijera")

    //alert("Elegiste " + jugador)

    alert("Pc elige: " + eleccion (pc))
    alert("Tu eliges: " + eleccion (jugador))

    //Combate

    if(pc == jugador) {alert("Empate")}
    else if((jugador == 1 && pc == 3) || (jugador == 2 && pc == 1) || (jugador == 3 && pc == 2)) {alert("Ganaste"); win = win + 1}
    else {alert("Perdiste"); lost = lost + 1 }

}

alert("Ganaste " + win + " Veces. Perdiste " + lost + " Veces.")
