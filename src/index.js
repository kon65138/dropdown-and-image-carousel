import './style.css';
import threeDotsImg from './imgs/more_vert_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg';

const topDropdownImg = document.querySelector('#topDropdownbtn img');
const bottomDropdownImg = document.querySelector('#bottomDropdownbtn img');

topDropdownImg.setAttribute('src', threeDotsImg);
bottomDropdownImg.setAttribute('src', threeDotsImg);

dropdown('topDropdownbtn', 'topDropdownContent', 'hover');
dropdown('bottomDropdownbtn', 'bottomDropdownContent', 'click');

function dropdown(btnId, dropdownContentId, clickOrHover) {
  const dropdownContent = document.getElementById(dropdownContentId);
  const btn = document.getElementById(btnId);
  const dropdonwContentCompStyles = window.getComputedStyle(dropdownContent);
  const bottom = document.querySelector('.bottom');
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
    bottom.addEventListener('mousedown', () => {
      if (
        dropdownContent.addEventListener('mouseover', () => {
          return 'mouse is over';
        }) !== 'mouse is over' &&
        dropdonwContentCompStyles.getPropertyValue('display') === 'flex'
      ) {
        dropdownContent.style = 'display: none;';
      }
    });
  }
}

const buttons = document.querySelectorAll('[data-carousel-button]');
const dots = document.querySelectorAll('.dots > li');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const offset = button.dataset.carouselButton === 'next' ? 1 : -1;
    const slides = button
      .closest('[data-carousel')
      .querySelector('[data-slides');
    const activeDot = document.querySelector('[data-active-dot]');
    const activeSlide = slides.querySelector('[data-active]');
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;
    slides.children[newIndex].dataset.active = true;
    dots[newIndex].dataset.activeDot = true;
    delete activeSlide.dataset.active;
    delete activeDot.dataset.activeDot;
  });
});

for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener('click', () => {
    const curntActv = document.querySelector('[data-active]');
    const curntDot = document.querySelector('[data-active-dot]');
    if (curntActv === document.querySelector(`[data-${i}]`)) return;
    document.querySelector(`[data-${i}]`).dataset.active = true;
    dots[i].dataset.activeDot = true;
    delete curntActv.dataset.active;
    delete curntDot.dataset.activeDot;
  });
}

for (let i = 0; i < 50000; i++) {
  rotateWindow(i);
}

function rotateWindow(i) {
  setTimeout(() => {
    buttons[1].dispatchEvent(new Event('click'));
  }, 5000 * i);
}
