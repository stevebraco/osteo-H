const contentConsultation = document.querySelector(".content-consultation");

const contentMedical = document.querySelector(".content-medical");

const contentLemontwist = document.querySelector(".content-lemontwist");

export function showConsultation(btnConsultation, btnMedical, btnLemontwist) {
  contentConsultation.classList.remove("close");
  contentMedical.classList.add("close");
  contentLemontwist.classList.add("close");

  btnConsultation.classList.remove("btn-disabled");
  btnMedical.classList.add("btn-disabled");
  btnLemontwist.classList.add("btn-disabled");
}

export function showMedical(btnConsultation, btnMedical, btnLemontwist) {
  contentConsultation.classList.add("close");
  contentMedical.classList.remove("close");
  contentLemontwist.classList.add("close");

  btnConsultation.classList.add("btn-disabled");
  btnMedical.classList.remove("btn-disabled");
  btnLemontwist.classList.add("btn-disabled");
}

export function showLemontwist(btnConsultation, btnMedical, btnLemontwist) {
  contentConsultation.classList.add("close");
  contentMedical.classList.add("close");
  contentLemontwist.classList.remove("close");

  btnConsultation.classList.add("btn-disabled");
  btnMedical.classList.add("btn-disabled");
  btnLemontwist.classList.remove("btn-disabled");
}
