const navMain = document.querySelector('[data-menu]');

const menuClickHandler = () => {
  if (navMain) {
    const button = navMain.querySelector('button');
    button.addEventListener('click', () => navMain.classList.toggle('is-active'));
  }
};

menuClickHandler();
