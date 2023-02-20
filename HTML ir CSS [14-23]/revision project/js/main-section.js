// variables - nesikeičiantys
const htmlElement = document.querySelector('html');
const heroButtons = document.querySelectorAll('.main__btn-container>.btn');
const mdBreakpoint = 800;

// state variables - kintamieji kurie keičiasi
let currentScreenSize;

// functions
const getScreenWidth = () => {
  return htmlElement.getBoundingClientRect().width;
}

const setCurrentScreenWidth = () => {
  const screenWidth = getScreenWidth();
  if (screenWidth < mdBreakpoint) {
    currentScreenSize = 'sm';
  } else {
    currentScreenSize = 'lg';
  }
}

const setButtonsWhite = () => {
  heroButtons.forEach(button => {
    button.classList.replace('btn-black', 'btn-white');
  });
}

const setButtonsBlack = () => {
  heroButtons.forEach(button => {
    button.classList.replace('btn-white', 'btn-black');
  })
}

const handleScreenResize = () => {
  const screenWidth = getScreenWidth();
  if (currentScreenSize === 'sm') {
    // Ekrano dydis yra sm
    if (screenWidth >= mdBreakpoint) {
      setButtonsWhite();
      setCurrentScreenWidth();
    }
  } else {
    // ekrano dydis yra lg
    if (screenWidth < mdBreakpoint) {
      setButtonsBlack();
      setCurrentScreenWidth();
    }
  }
}

// initial commands
setCurrentScreenWidth();
window.addEventListener('resize', handleScreenResize);