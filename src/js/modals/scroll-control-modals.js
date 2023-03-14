import { refs } from '../config/refs';

const { body } = refs;

function noScrollModalOpen() {
  body.classList.add('modal-open');
}
function isScrollModalClosed() {
  body.classList.remove('modal-open');
}
export { noScrollModalOpen, isScrollModalClosed };
