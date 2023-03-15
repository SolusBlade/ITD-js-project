import axios from 'axios';
import fetchData from './fetch-data';
import renderCards from './render-cards';

export default function screenWidth() {
  if (window.screen.width < 767) {
    return 3;
  }
  if (window.screen.width >= 768 && window.screen.width < 1280) {
    return 6;
  }
  if (window.screen.width > 1280) {
    return 9;
  }
}
for (let i = 1; i <= screenWidth(); i++) {
  fetchData('random.php').then(renderCards);
}
