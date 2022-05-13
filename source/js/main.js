const navMain = document.querySelector('[data-menu]');
const header = document.querySelector('[data-header]');

if (navMain.classList.contains('no-js')) {
  navMain.classList.remove('no-js');
  header.classList.remove('no-js');
}


const menuClickHandler = () => {
  if (navMain) {
    const button = navMain.querySelector('button');
    button.addEventListener('click', () => {
      navMain.classList.toggle('is-active');
      header.classList.toggle('is-active');
      navMain.style.overflow = 'auto';
      document.body.style.overflow = 'hidden';
      document.body.style.backgroundColor = 'rgba(0, 43, 102, 0.5)';
      if (!navMain.classList.contains('is-active')) {
        document.body.style.overflow = 'auto';
        document.body.style.backgroundColor = '';
      }
    });
  }
};

menuClickHandler();

document.body.addEventListener('click', (evt) => {
  if (evt.target === header) {
    navMain.classList.remove('is-active');
    document.body.style.overflow = 'auto';
    header.classList.remove('is-active');
    document.body.style.backgroundColor = '';
  }
});
