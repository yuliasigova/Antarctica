const navMain = document.querySelector('[data-menu]');

if (navMain.classList.contains('no-js')) {
  navMain.classList.remove('no-js');
}

const menuClickHandler = () => {
  if (navMain) {
    const button = navMain.querySelector('button');
    button.addEventListener('click', () => navMain.classList.toggle('is-active'));
  }

};

menuClickHandler();
