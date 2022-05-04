
/*function fnSumar(){
    var NroUno = parseFloat(document.getElementById("numerouno").value)
    var NroDos = parseFloat(document.getElementById("numerodos").value)
    document.getElementById("rFinal").innerHTML= NroUno+NroDos
}*/
function fnRestar(){
    var NroUno = parseFloat(document.getElementById("numerouno").value)
    var NroDos = parseFloat(document.getElementById("numerodos").value)
    document.getElementById("rFinal").innerHTML= NroUno-NroDos
}
function fnMultiplicar(){
    var NroUno = parseFloat(document.getElementById("numerouno").value)
    var NroDos = parseFloat(document.getElementById("numerodos").value)
    document.getElementById("rFinal").innerHTML= NroUno*NroDos
}
function fnDividir(){
    var NroUno = parseFloat(document.getElementById("numerouno").value)
    var NroDos = parseFloat(document.getElementById("numerodos").value)
    /*parseFloat($("#numerodos").val())*/
   document.getElementById("rFinal").innerHTML= NroUno/NroDos
}
    
function fnCalcular(){  
    
    //llamando objetos de radio
    var NroUno = parseFloat(document.getElementById("numerouno").value)
    /*var NroDos = parseInt(document.getElementById("numerodos").value)*/
    /*var NroUno = parseFloat($("#numerouno").val());*/
    var NroDos = parseFloat($("#numerodos").val())
    var vChecked = document.querySelector('input[name="flexRadio"]:checked').value
    
    if(vChecked=="RadioSum"){
        document.getElementById("rFinal").innerHTML= NroUno+NroDos;
    }
    
    if(vChecked=="RadioRest"){
        fnRestar();
    }

    if(vChecked=="RadioMult"){
        fnMultiplicar();
    }

    if(vChecked=="RadioDiv"){
        fnDividir();
    }
    
}