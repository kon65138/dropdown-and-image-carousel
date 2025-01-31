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
