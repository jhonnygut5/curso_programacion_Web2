class miClase {
    constructor(primero, segundo) {
        this.uno = primero;
        this.dos = segundo;
        this.tres = "hola mundo";
    }
    miMetodoUno() {
        // var a = 1;
        // var b = 2;
        // var suma = 0;
        // suma = a + b;
        // return suma;
        return this.uno;
    }
    miMedotoDos(entradaUno, entradaDos) {
        document.write(
            "El parametro uno es:" + entradaUno +
            "El parametro uno es:" + entradaDos
        );
    }
}
console.log("hola a todos");
// var objetoUno = new miClase("Pato", 123);
// document.write(objetoUno.uno);
// document.write("<br>");
// objetoUno.miMedotoDos("pollo", 222);

class miClaseDos extends miClase {
    constructor(uno, dos, cuarto) {

        super(uno,dos);
        this.cuatro = cuarto;
    }
}

var objetoDos = new miClaseDos("Goku", "Begueta", 2828);
document.write(objetoDos.tres);

