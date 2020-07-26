
class auto {
    constructor(pLlanta, pPuerta, pAciento, pPeso, pMarca, pCantP) {
        this.titulo = "Partes de un Auto";
        this.llantas = pLlanta;
        this.puertas = pPuerta;
        this.acientos = pAciento;
        this.peso = pPeso;
        this.marca = pMarca;
        this.cantPersonas = pCantP;
    }
    mostrarRueras() {
        var tamañoAro = 17;
        var calidad = "buena";
        document.write("********** MODELO ESTANDAR ************ <br>");
        document.write("Cantidad de Ruedas: "+this.llantas+" Tamaño Rueda: "+ tamañoAro+ " Calidad: "+calidad);        
    }
    mostrarEspacio() {
        var modelo = 2020;
        document.write("<br>")
        document.write("Cantidad de Puertas: "+this.puertas+" Acientos: "+ this.acientos+ " Cantidad de personas: "+this.cantPersonas+ " Modelo: "+ modelo);
    }

    mostarConfor() {
        var cale = "CALEFACCION"
        var tamañoAro = 17;
        var calidad = "buena";
        var modelo = 2021;
        document.write("<br>")
        document.write("********* MODELO CONFOR ************* <br>");
        document.write("Cantidad de Ruedas: "+this.llantas+" Tamaño: "+ tamañoAro+ "Calidad: "+calidad); 
        document.write("<br>")
        document.write("Cantidad de Puertas: "+this.puertas+" Acientos: "+ this.acientos+ " Cantidad de personas: "+this.cantPersonas+ " Modelo: "+ modelo);
    }
    
    sumar(a,b) {
        var s = a + b;
        document.write("</br>");
        document.write("Suma: "+ s);
    }
}

class auto2 extends auto {
    constructor(pMarca) {
        super(pLlanta, pPuerta, pAciento, pPeso, pMarca, pCantP);

    }

    mostarConfor2() {
        var cale = "CALEFACCION"
        var tamañoAro = 17;
        var calidad = "buena";
        var modelo = 2021;
        document.write("<br>")
        document.write("********* MODELO CONFOR ************* <br>");
        document.write("Cantidad de Ruedas: "+this.llantas+" Tamaño: "+ tamañoAro+ "Calidad: "+calidad); 
        document.write("<br>")
        document.write("Cantidad de Puertas: "+this.puertas+" Acientos: "+ this.acientos);
        document.write("<br>")
        document.write("Cantidad de personas: "+this.cantPersonas+ " Modelo: "+ modelo);
    }
}




var v1 = new auto(4,4,3,1000,"Toyota",5);
var v2 = new auto2(4,4,3,1000,"Toyota",5);
v1.mostrarRueras();
document.write("</br>");
v1.mostrarEspacio();
document.write("</br>");
v1.mostarConfor();
document.write("</br>");
v1.sumar(5,5);

document.write("<lu><li>hola</li></lu>");
// document.getElementById("")
