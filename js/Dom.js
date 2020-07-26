// var elementoP = document.getElementsByTagName("p");

function contenido1() {
    var mTi1 = document.getElementById("mTitulo1");
    var cont1 = document.getElementById("contenido1");    

    mTi1.innerHTML = "<tb style='border: 5px solid; border-color: yellow'>Menu Azul</tb>";
    mTi1.style = "background: blue; color: white; font-weight: bold; text-align: center;";    
    cont1.style = "background: #d2daff;";
}

function contenido2(id) {
    var mTi2 = document.getElementById("mTitulo2");
    var cont2 = document.getElementById("contenido2");
    
    mTi2.innerHTML = "<tb style='background: #000000;' >Menu Rojo</tb>";
    mTi2.style = "background: #ff0000; color: white; font-weight: bold; text-align: center;";    
    cont2.style = "background: #ffbcbc;";
}

function contenido3() {
    var mTi3 = document.getElementById("mTitulo3");
    var cont3 = document.getElementById("contenido3");
    
    mTi3.innerHTML = "<tb style='background: #224221; border-radius: 10px;' >Menu Rojo</tb>";
    mTi3.style = "background: #08ff00; color: white; font-weight: bold; text-align: center;";    
    cont3.style = "background: #b5fbb3;";
}


function contenido4() {
    var contArt = document.getElementById("contArticulos");    
    contArt.style = "border-color: #000000; border: solid";

    var contAsi = document.getElementById("contAside");    
    contAsi.style = "border-color: #000000; border: solid";
}

