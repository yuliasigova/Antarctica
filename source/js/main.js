const navMain = document.querySelector('[data-menu]');
const button = navMain.querySelector('button');

button.addEventListener('click', () => {
  navMain.classList.toggle('is-active');
});
