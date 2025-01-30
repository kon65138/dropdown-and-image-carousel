import './style.css';
import threeDotsImg from './imgs/more_vert_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg';

const topDropdownImg = document.querySelector('#topDropdown img');
const bottomDropdownImg = document.querySelector('#bottomDropdown img');

topDropdownImg.setAttribute('src', threeDotsImg);
bottomDropdownImg.setAttribute('src', threeDotsImg);

dropdown('topDropdown', 'topDropdownContent', 'hover');
dropdown('bottomDropdown', 'bottomDropdownContent', 'click');

function dropdown(btnId, dropdownContentId, clickOrHover) {
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
  } else if (clickOrHover.toLowerCase() === 'hover') {
    btn.addEventListener('mouseover', () => {
      dropdownContent.style = 'display: flex;';
    });
    dropdownContent.addEventListener('mouseleave', () => {
      dropdownContent.style = 'display: none;';
    });
  }
}
