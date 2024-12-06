function rand(n){

     return(Math.floor(Math.random() * n + 1 ));
    }

    var cambia_imagen = new Array();
    cambia_imagen[0] = "toyota";
    cambia_imagen[1] = "ford";
    cambia_imagen[2] = "bmw";
    cambia_imagen[3] = "mazda";
    cambia_imagen[4] = "suzuki";
    cambia_imagen[5] = "volkswagen";
    cambia_imagen[6] = "chevrolet";
    cambia_imagen[7] = "hyundai";
    cambia_imagen[8] = "honda";
    cambia_imagen[9] = "kia";
    

    function cambiar(){
         document.getElementById("ia").src = cambia_imagen[rand(10)-1];
    }