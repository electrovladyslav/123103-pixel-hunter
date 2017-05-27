/**
 * Make DOM-element from string-template
 * @param tmplString {string} string with HTML template
 * @returns {Element} DOM element
 */

// const myDiv = makeElementFromTemplate(`<div>Разметка DOM-элемента</div>`);
const makeElementFromTemplate = (tmplString) => {
  const endOpenTag = tmplString.indexOf(`\>`);
  const startCloseTag = tmplString.lastIndexOf(`\<\/`);

  const tagName = tmplString.slice(1, endOpenTag);
  const content = tmplString.slice(endOpenTag + 1, startCloseTag);

  let DOMElem = document.createElement(`${tagName}`);
  DOMElem.innerHTML = content;

  return DOMElem;
};

export default makeElementFromTemplate;
