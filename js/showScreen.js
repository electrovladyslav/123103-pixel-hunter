const main = document.querySelector(`main`);

/**
 * Clear element .main on page and render input element inside
 *
 * @param {Node} element DOM node to render
 */
const showScreen = (element) => {
  main.innerHTML = ``;
  main.appendChild(element);
};

export default showScreen;
