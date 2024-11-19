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
  btnConsultation.classList.remove('btn-disabled')
  btnMedical.classList.add('btn-disabled')
});

// Ajouter l'événement de clic sur le bouton médical
btnMedical.addEventListener('click', () => {
  toggleContent(contentMedical, contentConsultation);
  btnConsultation.classList.add('btn-disabled')
  btnMedical.classList.remove('btn-disabled')
});



  window.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(entries => {
    console.log(entries)
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      if (entry.intersectionRatio > 0) {
        document.querySelector(`.section-nav li .section-nav-link[href="#${id}"]`).parentElement.classList.add('active');
      } else {
        document.querySelector(`.section-nav li .section-nav-link[href="#${id}"]`).parentElement.classList.remove('active');
      }
    });
  });

  // Track all sections that have an `id` applied
  document.querySelectorAll('article[id]').forEach((section) => {
    observer.observe(section);
  });
  
});