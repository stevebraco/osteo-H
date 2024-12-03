const header = document.querySelector('.header')

const scrollTop = () => {
    const shouldScroll = window.scrollY > 700;    
    if (shouldScroll && !header.classList.contains('scrolled')) {
      header.classList.add('scrolled');
    } else if (!shouldScroll && header.classList.contains('scrolled')) {
      header.classList.remove('scrolled');
    }}

    export default scrollTop