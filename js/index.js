import aos from "./AOS.js";
import { showConsultation, showMedical } from "./consultation_footer.js";
import { closeMenu, openMenu } from "./menu.js";
import scrollTop from "./scroll.js";

const btnConsultation = document.querySelector("#consultation");
const btnMedical = document.querySelector("#medical");
const btnMenu = document.querySelector(".menu");
const btnClose = document.querySelector(".menu-close");

btnConsultation.addEventListener("click", () =>
  showConsultation(btnConsultation, btnMedical)
);
btnMedical.addEventListener("click", () =>
  showMedical(btnConsultation, btnMedical)
);

btnMenu.addEventListener("click", () => openMenu(btnMenu, btnClose));

btnClose.addEventListener("click", () => closeMenu(btnMenu, btnClose));

document.addEventListener("DOMContentLoaded", aos);

document.addEventListener("scroll", scrollTop);

document.addEventListener("DOMContentLoaded", function () {
  new Glide(".glide-1", {
    type: "carousel", // Type de carrousel
    startAt: 0, // L'index du premier slide
    perView: 3, // Nombre de slides visibles à la fois (par défaut pour les écrans plus larges)
    peek: {
      before: 10,
      after: 50
    },
    gap: 10, // Espace entre les slides
    // autoplay: 2000, // Défilement automatique toutes les 3 secondes (3000 ms)
    hoverpause: false, // Arrêter l'autoplay au survol
    loop: true, // Faire tourner les slides en boucle
    breakpoints: {
      1015: {
        perView: 2, // À partir de 785px, afficher une seule image
      },
      785: {
        perView: 1, // À partir de 785px, afficher une seule image
      },
    },
  }).mount();

  new Glide(".glide-2", {
    type: "carousel", // Type de carrousel
    startAt: 0, // L'index du premier slide
    perView: 3, // Nombre de slides visibles à la fois (par défaut pour les écrans plus larges)
    peek: {
      before: 10,
      after: 50
    },
    gap: 10, // Espace entre les slides
    // autoplay: 2000, // Défilement automatique toutes les 3 secondes (3000 ms)
    hoverpause: false, // Arrêter l'autoplay au survol
    loop: true, // Faire tourner les slides en boucle
    breakpoints: {
      1015: {
        perView: 2, // À partir de 785px, afficher une seule image
      },
      785: {
        perView: 1, // À partir de 785px, afficher une seule image
      },
    },
  }).mount();

  new Glide(".glide-3", {
    type: "carousel", // Type de carrousel
    startAt: 0, // L'index du premier slide
    perView: 3, // Nombre de slides visibles à la fois (par défaut pour les écrans plus larges)
    peek: {
      before: 10,
      after: 50
    },
    gap: 10, // Espace entre les slides
    // autoplay: 2000, // Défilement automatique toutes les 3 secondes (3000 ms)
    hoverpause: false, // Arrêter l'autoplay au survol
    loop: true, // Faire tourner les slides en boucle
    breakpoints: {
      1015: {
        perView: 2, // À partir de 785px, afficher une seule image
      },
      785: {
        perView: 1, // À partir de 785px, afficher une seule image
      },
    },
  }).mount();
});
