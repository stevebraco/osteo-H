const contentConsultation = document.querySelector('.content-consultation')
const contentMedical = document.querySelector('.content-medical')

function toggleContent(showElement, hideElement) {
    showElement.classList.remove('close');
    hideElement.classList.remove('show');
    hideElement.classList.add('close');
  }
  
export const showConsultation = (btnConsultation, btnMedical) => {
    toggleContent(contentConsultation, contentMedical);
    btnConsultation.classList.remove('btn-disabled')
    btnMedical.classList.add('btn-disabled')
  }

export const showMedical = (btnConsultation, btnMedical) => {
    toggleContent(contentMedical, contentConsultation);
    btnConsultation.classList.add('btn-disabled')
    btnMedical.classList.remove('btn-disabled')
  }

