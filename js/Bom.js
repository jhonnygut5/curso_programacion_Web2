// segun la pagina web de History Object
// aplicamos como ejemplo el len es el history de un registro
// alert("Historial de la Web: "+history.length);
function alerta() {
    alert("Historial de la Web: "+history.length);
}
// de puede aplicar 3 comandos actuales
//back: carga el url anterior en el history
function atras() {
    history.back();
}

//forward: carga la url siguiente en el historial
function adelante() {
    history.forward();
}

//go: carga mediante un numero el cual nos permite ir a una pagina concreta
//del historial. Si indicamos un numero positivo o negativo, nos permite 
//avanzar o retroceder a la posición de deseamos.
function ir() {
    var numero = prompt("Indica un numero para moverte en el historial: ");
    history.go(numero);
}






