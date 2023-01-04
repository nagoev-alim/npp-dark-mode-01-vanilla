// ⚡️ Import Styles
import './style.scss';
import feather from 'feather-icons';

// ⚡️ Render Skeleton
document.querySelector('#app').innerHTML = `
<div class='app-container'>
  <div class='dark-mode'>
    <h2>Dark Mode</h2>
    <button data-toggle=''>
      ${feather.icons.moon.toSvg()}
    </button>
  </div>

  <a class='app-author' href='https://github.com/nagoev-alim' target='_blank'>${feather.icons.github.toSvg()}</a>
</div>
`;

// ⚡️Create Class
class App {
  constructor() {
    this.DOM = {
      button: document.querySelector('[data-toggle]'),
    };

    this.storageGet();
    this.DOM.button.addEventListener('click', this.toggleTheme);
  }

  /**
   * @function toggleTheme - Toggle body class name
   * @param target
   */
  toggleTheme = ({ target }) => {
    const isSetTheme = document.documentElement.classList.toggle('dark-theme');
    target.innerHTML = isSetTheme ? feather.icons.sun.toSvg() : feather.icons.moon.toSvg();
    localStorage.setItem('theme', isSetTheme ? 'dark' : 'light');
  };

  /**
   * @function storageGet - Get item from localStorage
   */
  storageGet = () => {
    if (localStorage.getItem('theme')) {
      const isSetTheme = localStorage.getItem('theme') === 'light';
      this.DOM.button.innerHTML = isSetTheme ? feather.icons.moon.toSvg() : feather.icons.sun.toSvg();
      document.documentElement.className = `${isSetTheme ? '' : 'dark-theme'}`;
    }
  };
}

// ⚡️Class instance
new App();
