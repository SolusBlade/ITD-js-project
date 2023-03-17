const toggleElement = document.querySelectorAll('.dark-mode-toggle');
const body = document.body;



//Для сохранения выбранной тему сайта в браузере будем использовать LocalStorage.
  
class ThemeToggle {
  darkTheme = 'dark-theme';

  constructor() {
    toggleElement.forEach(el => el.addEventListener('click', this.toggleTheme))
  }

  setTheme() {
    localStorage.setItem(this.darkTheme, this.darkTheme);
  }

  removeTheme() {
    localStorage.removeItem(this.darkTheme);
  }

  getTheme() {
    return localStorage.getItem(this.darkTheme);
  }

  isDarkThemeOn() {
    return body.classList.contains(this.darkTheme);
  }

  toggleTheme = () => {
    const isDark = this.isDarkThemeOn();
    body.classList.toggle(this.darkTheme, !isDark);
    toggleElement.forEach(el => el.checked = !isDark);
    if (this.getTheme()) {
      this.removeTheme();
    } else {
      this.setTheme();
    }
  };

  setThemeOn = (isOn) => {
    body.classList.toggle(isOn);
    toggleElement.forEach(el => el.checked = Boolean(isOn));
  }
}

const toggle = new ThemeToggle();

window.addEventListener('DOMContentLoaded', () => {
  const isOn = toggle.getTheme();
  if (isOn) toggle.setThemeOn(toggle.darkTheme);
});