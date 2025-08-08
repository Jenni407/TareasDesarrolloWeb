
// Cambiar tema de colores
document.getElementById('darkModeToggle').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
});
 // Muestra una sola sección a la vez 
function openTab(tabName) { 
    var i, x;
    x = document.getElementsByClassName("containerTab"); //selecciona todas las secciones
    //recorre todas las secciones con un bucle
    for (i = 0; i < x.length; i++) { 
      x[i].style.display = "none"; //oculta todas las secciones
    }
    document.getElementById(tabName).style.display = "block"; //muestra la sección seleccionada
  }

// Mostrar/ocultar contenido adicional
function myFunction(button) {
  // Obtener el elemento padre de la noticia
  var noticia = button.parentElement;
  
  // Buscar los elementos de texto adicional
  var dots = noticia.querySelector('.dots');
  var moreText = noticia.querySelector('.more');

  // Alternar la visibilidad del texto adicional
  if (dots.style.display === "none") {
      dots.style.display = "inline";
      button.innerHTML = "Leer más";
      moreText.style.display = "none";
  } else {
      dots.style.display = "none";
      button.innerHTML = "Leer menos";
      moreText.style.display = "inline";
  }
}

// Validación del formulario de contacto
  function validarFormulario() {
  
    alert("Mensaje enviado correctamente");
    return true;
  }