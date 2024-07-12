/* JS POUR LE BURGER */

function menuMobile() {
    const btn = document.querySelector('.burger'); //prend tous les elements de class burger = le bouton avec les barres
    const header = document.querySelector('.header'); //prend tous les elements du header
    const link = document.querySelectorAll('.navbar a'); //prend tous les liens de la navbar
    
    btn.addEventListener('click', () => {
        header.classList.toggle('show-nav'); //active / désactive la classe show-nav et donc affiche/cache le menu
    });
    link.forEach(link => {
        link.addEventListener('click', () => {
            header.classList.remove('show-nav'); //cache le menu quand on clique sur un lien de la navbar
        });
    });
}

menuMobile();

/* JS POUR LES SLIDES */

let slideIndex = 1;

// boutons précédent / suivant

function plusSlides(n) {
  showSlides(slideIndex += n); //affiche la n-ième slide suivante
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n); //affiche la n-ième slide
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides"); //prend tous les elements de classe mySlides = les 2 photos
  let dots = document.getElementsByClassName("dot"); //prend les point sous les slides
  if (n > slides.length) {slideIndex = 1} //renvoi de la dernière à la première slide 
  if (n < 1) {slideIndex = slides.length} //renvoi de la première slide à la dernière
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; //display none sur toutes les lides
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", ""); //aucun point n'est actif
  }
  slides[slideIndex-1].style.display = "block"; //affiche la slide demandée
  dots[slideIndex-1].className += " active"; //active le point correspondant
}

showSlides(slideIndex);

/* JS POUR LE FORMULAIRE */

const tel = document.querySelector('#tel');
const submit = document.querySelector('#submit');

submit.addEventListener('click', () => { //quand on clique sur submit
    if (tel.validity.patternMismatch) { //si le numéro entré par l'utilisateur n'a pas le bon pattern (indiqué en html)
        tel.setCustomValidity('Veuillez entrer un numéro de téléphone composé uniquement de chiffres (ex : 0123456789'); //message d'erreur personnalisé
    }
    else {
        tel.setCustomValidity(''); //sinon pas de message
    }
})