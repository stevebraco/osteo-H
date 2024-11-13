const btnConsultation = document.querySelector('#consultation')
const btnMedical = document.querySelector('#medical')

const contentConsultation = document.querySelector('.content-consultation')
const contentMedical = document.querySelector('.content-medical')

function toggleContent(showElement, hideElement) {
  showElement.classList.add('show');
  showElement.classList.remove('close');
  hideElement.classList.remove('show');
  hideElement.classList.add('close');
}

// Ajouter l'événement de clic sur le bouton de consultation
btnConsultation.addEventListener('click', () => {
  toggleContent(contentConsultation, contentMedical);
});

// Ajouter l'événement de clic sur le bouton médical
btnMedical.addEventListener('click', () => {
  toggleContent(contentMedical, contentConsultation);
});