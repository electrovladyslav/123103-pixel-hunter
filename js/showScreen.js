/**
 * Clear element .main on page and render input element inside
 *
 * @param {Node} container element to which will be insert
 * @param {Node} element DOM node to render
 * @param {Node} restElements other elements to insert
 */
const showScreen = (container, element, ...restElements) => {
  container.innerHTML = ``;
  container.appendChild(element);
  if (restElements.length) {
    restElements.forEach((item) => {
      container.appendChild(item);
    });
  }
};

export default showScreen;
