import './style.css'
import threeDotsImg from "./imgs/more_vert_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"

const topDropdownbtn = document.getElementById('topDropdown');
const topDropdownImg = document.querySelector('#topDropdown img');
const bottomDropdownbtn = document.getElementById('bottomDropdown');
const bottomDropdownImg = document.querySelector('#bottomDropdown img');

topDropdownImg.setAttribute('src', threeDotsImg);
bottomDropdownImg.setAttribute('src', threeDotsImg);


dropdown()

function dropdown(btnId) {
    const dropdownContent = document.querySelector(`#${btnId} + .dropdownContent`);
    const btn = document.getElementById(btnId);
    const dropdonwContentCompStyles = window.getComputedStyle(dropdownContent);
    btn.addeventlister('click', () => {
        console.log(dropdonwContentCompStyles.getPropertyValue('display'));
    })
}