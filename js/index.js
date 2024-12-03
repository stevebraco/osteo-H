import aos from "./AOS.js";
import { showConsultation, showMedical } from "./consultation_footer.js";
import { closeMenu, openMenu } from "./menu.js";
import scrollTop from "./scroll.js";

const btnConsultation = document.querySelector('#consultation')
const btnMedical = document.querySelector('#medical')
const btnMenu = document.querySelector('.menu')
const btnClose = document.querySelector('.menu-close')



btnConsultation.addEventListener('click', () => showConsultation(btnConsultation, btnMedical));
btnMedical.addEventListener('click', () => showMedical(btnConsultation, btnMedical));

btnMenu.addEventListener('click', () => openMenu(btnMenu, btnClose))

btnClose.addEventListener('click',  () => closeMenu(btnMenu, btnClose))

document.addEventListener('DOMContentLoaded', aos);

document.addEventListener('scroll', scrollTop);


//   window.addEventListener('DOMContentLoaded', () => {
//   const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       const id = entry.target.getAttribute('id');
//       if (entry.intersectionRatio > 0) {
//         document.querySelector(`.section-nav li .section-nav-link[href="#${id}"]`).parentElement.classList.add('active');
//       } else {
//         document.querySelector(`.section-nav li .section-nav-link[href="#${id}"]`).parentElement.classList.remove('active');
//       }
//     });
//   });

//   // Track all sections that have an `id` applied
//   document.querySelectorAll('article[id]').forEach((section) => {
//     observer.observe(section);
//   });
  
// });