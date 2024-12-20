const navbar = document.querySelector('.navbar__wrapper')
const body = document.querySelector('body')

export const openMenu = (btnMenu, btnClose) => {
    navbar.classList.toggle('show-menu')
    btnMenu.classList.add('hidden')
    btnClose.classList.remove('hidden')
    body.classList.add('over-hidden')
  }

export const closeMenu = (btnMenu, btnClose) => {
    navbar.classList.toggle('show-menu')
    btnMenu.classList.remove('hidden')
    btnClose.classList.add('hidden')
    body.classList.remove('over-hidden')
  
  }