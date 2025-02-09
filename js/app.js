var imagenes = [
     "toyota.png",
     "ford.png",
     "bmw.jpg",
     "mazda.png",
     "suzuki.png",
     "volkswagen.png",
     "chevrolet.jpg",
     "hyundai.png",
     "honda.jpg",
     "kia.png"
   ];

   var imagenesBarajadas = [];
   var currentBrand = "";
   var currentRound = 1;
   var totalRounds = 10;
   var correctCount = 0;
   var incorrectCount = 0;

   function shuffle(array) {
     for (let i = array.length - 1; i > 0; i--){
       let j = Math.floor(Math.random() * (i + 1));
       [array[i], array[j]] = [array[j], array[i]];
     }
     return array;
   }

   function cambiar(){
     var indice = currentRound - 1;
     var imgName = imagenesBarajadas[indice];
     document.getElementById("ia").src = "images/" + imgName;
     currentBrand = imgName.split('.')[0];
     document.getElementById("brandSelect").value = "";
   }

   function iniciarJuego(){
     imagenesBarajadas = shuffle(imagenes.slice());
     currentRound = 1;
     correctCount = 0;
     incorrectCount = 0;
     document.querySelector(".button_enviar").disabled = false;
     cambiar();
   }

   function verificar(){
     var selectedBrand = document.getElementById("brandSelect").value;
     if(selectedBrand === ""){
       alert("Por favor, selecciona una marca.");
       return;
     }
     if(selectedBrand === currentBrand){
       correctCount++;
       alert("Respuesta correcta.");
     } else {
       incorrectCount++;
       alert("Respuesta incorrecta. La respuesta correcta era: " + currentBrand);
     }
     if(currentRound < totalRounds){
       currentRound++;
       cambiar();
     } else {
       var mensajeFinal = "";
       if(correctCount === totalRounds){
         mensajeFinal = "¡Felicidades!";
       } else if(correctCount > 7){
         mensajeFinal = "¡Buen trabajo!";
       } else {
         mensajeFinal = "Juego terminado.";
       }
       mensajeFinal += "\nRespuestas correctas: " + correctCount + "\nRespuestas incorrectas: " + incorrectCount;
       alert(mensajeFinal);
       document.querySelector(".button_enviar").disabled = true;
     }
   }