const main = document.querySelector(`main`);

/**
 * Clear element .main on page and render input element inside
 *
 * @param {Node} element DOM node to render
 * @param {Node} restElements other elements to insert
 */
const showScreen = (element, ...restElements) => {
  main.innerHTML = ``;
  main.appendChild(element);
  if (restElements.length) {
    restElements.forEach((item) => {
      main.appendChild(item);
    });
  }
};

export default showScreen;
