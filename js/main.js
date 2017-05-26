// ***TASK #2***
const templates = document.querySelectorAll(`template`);
const main = document.querySelector(`main`);
let currentScreen;

// ***TASK #3***
/**
 *Switching screens
 *
 * @param {number} screenNumber Screen to which will switch
 */
function switchScreen(screenNumber) {
  if ((screenNumber < 0) || (screenNumber > templates.length - 1)) {
    return;
  }

  const clone = document.importNode(templates[screenNumber].content, true);
  main.innerHTML = ``;
  main.appendChild(clone);
  currentScreen = screenNumber;
}

// ***TASK #4***
switchScreen(0);

// ***TASK #5***
/**
 * Hadler for keyboards events
 * @param event
 */

function handler(event) {
  if (event.altKey) {
    if (event.key === `ArrowRight`) {
      switchScreen(currentScreen + 1);
      event.preventDefault();
    }

    if (event.key === `ArrowLeft`) {
      switchScreen(currentScreen - 1);
      event.preventDefault();
    }
  }
}

document.addEventListener(`keyup`, handler);
