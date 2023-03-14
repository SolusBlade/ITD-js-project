import axios from 'axios';
import fetchData from './fetch-data';
import renderCards from './render-cards';

if (window.screen.width <= 767) {
  for (let i = 1; i <= 3; i++) {
    fetchData('random.php').then(renderCards);
  }
}
if (window.screen.width > 768 && window.screen.width <= 1279) {
  for (let i = 1; i <= 6; i++) {
    fetchData('random.php').then(renderCards);
  }
}
if (window.screen.width > 1280) {
  for (let i = 1; i <= 9; i++) {
    fetchData('random.php').then(renderCards);
  }
}
