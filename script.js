function funcion(){
    var dato = document.getElementById("datos").value;
    var answer = dato;
    for(var i = (dato - 1); i > 1; i--){
        
        answer = answer * i;
        
    }

    document.getElementById("answer").innerHTML  = answer;
    document.getElementById("datos").value = "";
    document.getElementById("datos").focus();
}