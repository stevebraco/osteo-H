const navbar = document.querySelector('.navbar__wrapper')
const body = document.querySelector('body')

export const openMenu = (btnMenu, btnClose) => {
    navbar.classList.toggle('show-menu')
    btnMenu.classList.add('test')
    btnClose.classList.remove('test')
    body.classList.add('over-hidden')
  }

export const closeMenu = (btnMenu, btnClose) => {
    navbar.classList.toggle('show-menu')
    btnMenu.classList.remove('test')
    btnClose.classList.add('test')
    body.classList.remove('over-hidden')
  
  }