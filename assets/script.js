const postagens = document.querySelector("#postagens");
const noticia1 = document.querySelector("#noticia1");
const noticia2 = document.querySelector("#noticia2");
const noticia3 = document.querySelector("#noticia3");
const noticia4 = document.querySelector("#noticia4");
const carousel = document.querySelector("#carouselExampleDark");
const extra = document.querySelector("#extra");
const targetElement = document.getElementById("target"); 
const targetPosition = targetElement.offsetTop;
const noticiaPag1 = document.querySelector("#noticiaPag1");
const noticiaPag2 = document.querySelector("#noticiaPag2");
const noticiaPag3 = document.querySelector("#noticiaPag3");
const noticiaPag4 = document.querySelector("#noticiaPag4");

var tituloElemento1 = document.querySelector('#noticia1 #titulo');
var textoTitulo1 = tituloElemento1.textContent;

var tituloElemento2 = document.querySelector('#noticia2 #titulo');
var textoTitulo2 = tituloElemento2.textContent;

var tituloElemento3 = document.querySelector('#noticia3 #titulo');
var textoTitulo3 = tituloElemento3.textContent;

var tituloElemento4 = document.querySelector('#noticia4 #titulo');
var textoTitulo4 = tituloElemento4.textContent;

//FUNCTIONS

function hideNoticias()
{
    noticia1.style.display ="none";
    noticia2.style.display ="none";
    noticia3.style.display ="none";
    noticia4.style.display ="none";
    carousel.style.display = 'none';
    extra.style.display = 'none';
}

//EVENTS

noticia1.addEventListener("click", (evt) => {
   evt.preventDefault();
   hideNoticias();

   targetElement.innerHTML= textoTitulo1;
   noticiaPag1.style.display = "flex";
});

noticia2.addEventListener("click", (evt) => {
    evt.preventDefault();
    hideNoticias();
 
    targetElement.innerHTML= textoTitulo2;
    noticiaPag2.style.display = "flex";
 });

 noticia3.addEventListener("click", (evt) => {
    evt.preventDefault();
    hideNoticias();
 
    targetElement.innerHTML= textoTitulo3;
    noticiaPag3.style.display = "flex";
 });

 noticia4.addEventListener("click", (evt) => {
    evt.preventDefault();
    hideNoticias();
 
    targetElement.innerHTML= textoTitulo4;
    noticiaPag4.style.display = "flex";
 });

postagens.addEventListener("click", (evt) => {
    evt.preventDefault();
    window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
    });
});