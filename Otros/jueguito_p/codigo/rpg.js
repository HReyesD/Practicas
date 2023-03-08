//alert("Hola, Manco.")

window.addEventListener("load",Iniciar)

let ataqueJugador
let ataqueEnemigo
let resultadoCombate
let tuVida = 5
let vidaEnemiga = 5
   
    function Iniciar () {

        let bClase = document.getElementById('b_clase')
            bClase.addEventListener('click', sClase)

        let bAtaque = document.getElementById('b_ataque')
            bAtaque.addEventListener('click', fAtaque)

        let bDefensa = document.getElementById('b_defensa')
            bDefensa.addEventListener('click', fDefensa)

        let bMagia = document.getElementById('b_magia')
            bMagia.addEventListener('click', fMagia)

    }

    function sClase(){

        let picaro = document.getElementById('picaro')
        let guerrero = document.getElementById('guerrero')
        let mago = document.getElementById('mago')
        let tu_clase = document.getElementById('tu_clase')

        if (picaro.checked) 
            {alert("Elegiste Picaro")} 
        else if (mago.checked) 
            {alert("Elegiste Mago")}
        else if (guerrero.checked) 
            {alert("Elegiste Guerrero")}
        else(alert("Elige Una Clase"))

        if (picaro.checked) 
        {tu_clase.innerHTML = 'Picaro'}
        else if (mago.checked)
        {tu_clase.innerHTML = 'Mago'}
        else if (guerrero.checked)
        (tu_clase.innerHTML = 'Guerrero')

        aEnemigo (a)

    }

    function aEnemigo () {

        let enemigoA = a(1,3)
        let sEnemigo =  document.getElementById('tu_enemigo')
        
            if (enemigoA == 1){sEnemigo.innerHTML = "Picaro"}
            else if (enemigoA == 3) {sEnemigo.innerHTML = "Guerrero"}
            else {sEnemigo.innerHTML = "Mago"}
        
    }

    function fAtaque () {

        ataqueJugador = 'ataque'
        aAleatorioEnemigo(a)

    }
    function fDefensa() {

        ataqueJugador = 'defensa'
        aAleatorioEnemigo(a)

    }
    function fMagia () {

        ataqueJugador = 'magia'
        aAleatorioEnemigo(a)

    }
    function aAleatorioEnemigo() {

        let ataqueEnemigoA = a(1,3)

            if (ataqueEnemigoA == 1) {ataqueEnemigo = 'magia'}
            else if (ataqueEnemigoA == 3) {ataqueEnemigo = 'defensa'}
            else {ataqueEnemigo = 'ataque'}

            resultadoC()

    }
    function resultadoC() {

        let tu_vida = document.getElementById("tu_vida")
        let vida_enemiga = document.getElementById("vida_enemiga")

        if(ataqueEnemigo==ataqueJugador) {crearMensaje ('Empate')

            /*vidaEnemiga++
            vida_enemiga.innerHTML = vidaEnemiga
            tuVida++
            tu_vida.innerHTML = tuVida*/
    }

        else if((ataqueJugador == 'magia' && ataqueEnemigo == 'defensa') || (ataqueJugador == 'ataque' && ataqueEnemigo == 'magia') || (ataqueJugador == 'defensa' && ataqueEnemigo == 'ataque')) {
            crearMensaje ('Victoria')
            vidaEnemiga--
            vida_enemiga.innerHTML = vidaEnemiga
        }

       /* else if(ataqueJugador == 'magia' && ataqueEnemigo == 'defensa'){
            crearMensaje ('Victoria')
        }
        else if(ataqueJugador == 'ataque' && ataqueEnemigo == 'magia'){
            crearMensaje ('Victoria')
        }
        else if(ataqueJugador == 'defensa' && ataqueEnemigo == 'ataque'){
            crearMensaje ('Victoria')
        }*/

        else{crearMensaje ('Derrota')
        tuVida--
        tu_vida.innerHTML = tuVida 
    }

        revisarVidas() 
    
    }
    function revisarVidas(){

        if (vidaEnemiga == 0) {crearMensajeFinal("FELICITACIONES! Eres la Verga 🍆")}

        else if(tuVida == 0) {crearMensajeFinal('Perdiste Looser 👮‍♂️')}
    }

    function crearMensajeFinal(resultadoFinal){

        let sectionMensajes=document.getElementById('mensajes')
        let parrafo=document.createElement('p')
        parrafo.innerHTML=resultadoFinal
        sectionMensajes.appendChild(parrafo)


    }
    function crearMensaje (resultadoCombate) {     

        let seccionMensaje = document.getElementById('mensajes')
        let mensaje = document.createElement('p')
        mensaje.innerHTML = 'Usaste ' + ataqueJugador + ' Y tu enemigo uso ' + ataqueEnemigo + ' - ' + resultadoCombate
        seccionMensaje.appendChild(mensaje)

    }
    function a(min, max) {return Math.floor(Math.random() * (max - min + 1) + min)}






