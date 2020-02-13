var contenidoMusculares = document.getElementById('contenido-musculares');
var contenidoEmocionales = document.getElementById('contenido-emocionales');
var contenidoBiologicos = document.getElementById('contenido-biologicos');

window.onload = function() {
    this.contenidoMusculares.style.display = 'none';
    this.contenidoEmocionales.style.display = 'none';
    this.contenidoBiologicos.style.display = 'none';
};

function muestra_oculta(id){
    var cajaTexto = document.getElementById(id); //se define la variable "el" igual a nuestro div
    cajaTexto.style.display = (cajaTexto.style.display == 'none')
    ? 'block'
    : 'none'; //damos un atributo display:none que oculta el div
}
