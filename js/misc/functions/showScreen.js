/**
 * Clear element .central on page and render input elements inside
 *
 * @param {Node} element DOM node to render
 * @param {Node} restElements other elements to insert
 */
const showScreen = (element, ...restElements) => {
  let container = document.querySelector(`.central`);
  container.innerHTML = ``;
  container.appendChild(element);
  if (restElements.length) {
    restElements.forEach((item) => {
      container.appendChild(item);
    });
  }
};

export default showScreen;
