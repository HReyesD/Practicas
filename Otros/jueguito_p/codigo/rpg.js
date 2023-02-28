//alert("Hola, Manco.")

window.addEventListener("load",Iniciar)
   
    function Iniciar () {

        let bClase = document.getElementById('b_clase')
        
            bClase.addEventListener('click', sClase)

    }

    function sClase(){

        let picaro = document.getElementById('picaro')
        let guerrero = document.getElementById('guerrero')
        let mago = document.getElementById('mago')
        let tu_vida = document.getElementById("tu_vida")
        let vida_enemiga = document.getElementById("vida_enemiga")
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
        
    }







