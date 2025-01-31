import './style.css';
import threeDotsImg from './imgs/more_vert_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg';

const topDropdownImg = document.querySelector('#topDropdownbtn img');
const bottomDropdownImg = document.querySelector('#bottomDropdownbtn img');

topDropdownImg.setAttribute('src', threeDotsImg);
bottomDropdownImg.setAttribute('src', threeDotsImg);

dropdown('topDropdown', 'topDropdownbtn', 'topDropdownContent', 'hover');
dropdown(
  'bottomDropdown',
  'bottomDropdownbtn',
  'bottomDropdownContent',
  'click',
);

function dropdown(dropdownContainerId, btnId, dropdownContentId, clickOrHover) {
  const dropdownContent = document.getElementById(dropdownContentId);
  const btn = document.getElementById(btnId);
  const dropdonwContentCompStyles = window.getComputedStyle(dropdownContent);
  if (clickOrHover.toLowerCase() === 'click') {
    btn.addEventListener('click', () => {
      if (dropdonwContentCompStyles.getPropertyValue('display') === 'none') {
        dropdownContent.style = 'display: flex;';
      } else if (
        dropdonwContentCompStyles.getPropertyValue('display') === 'flex'
      ) {
        dropdownContent.style = 'display: none;';
      }
    });
  }
}

const buttons = document.querySelectorAll('[data-carousel-button]');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const offset = button.dataset.carouselButton === 'next' ? 1 : -1;
    const slides = button
      .closest('[data-carousel')
      .querySelector('[data-slides');
    const activeSlide = slides.querySelector('[data-active]');
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;
    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});
