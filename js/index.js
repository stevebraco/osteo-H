import aos from "./AOS.js";

import {
  showConsultation,
  showMedical,
  showLemontwist,
} from "./consultation_footer.js";

import { closeMenu, openMenu } from "./menu.js";

import scrollTop from "./scroll.js";

const btnConsultation = document.querySelector("#consultation");
const btnMedical = document.querySelector("#medical");
const btnLemontwist = document.querySelector("#lemontwist");

const btnMenu = document.querySelector(".menu");
const btnClose = document.querySelector(".menu-close");

btnConsultation.addEventListener("click", () =>
  showConsultation(btnConsultation, btnMedical, btnLemontwist)
);

btnMedical.addEventListener("click", () =>
  showMedical(btnConsultation, btnMedical, btnLemontwist)
);

btnLemontwist.addEventListener("click", () =>
  showLemontwist(btnConsultation, btnMedical, btnLemontwist)
);

btnMenu.addEventListener("click", () => openMenu(btnMenu, btnClose));

btnClose.addEventListener("click", () => closeMenu(btnMenu, btnClose));

document.addEventListener("DOMContentLoaded", aos);

document.addEventListener("scroll", scrollTop);

document.addEventListener("DOMContentLoaded", () => {
  const glideSelectors = [
    ".glide-1",
    ".glide-2",
    ".glide-3",
    ".glide-grossesse",
  ];

  glideSelectors.forEach((selector) => {
    const element = document.querySelector(selector);

    if (!element) return;

    new Glide(element, {
      type: "carousel",
      startAt: 0,
      perView: 2,
      peek: {
        before: 10,
        after: 50,
      },
      gap: 20,
      hoverpause: false,
      loop: true,
      breakpoints: {
        1015: {
          perView: 2,
        },
        785: {
          perView: 1,
        },
      },
    }).mount();
  });
});
