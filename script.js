document.getElementById("buttonCita").addEventListener("click", function(event) {
  event.preventDefault(); 


  var nombre = document.getElementById("nombre").value;
  var numero = document.getElementById("numero").value;
  var email = document.getElementById("email").value;
  var asunto = document.getElementById("asunto").value;
  var fecha = document.getElementById("fecha").value;
  var mensaje = document.getElementById("mensaje").value;

  console.log("Nombre:", nombre);
  console.log("Número:", numero);
  console.log("Email:", email);
  console.log("Asunto:", asunto);
  console.log("Fecha:", fecha);
  console.log("Mensaje:", mensaje);

  
  document.getElementById("form").reset();
});
