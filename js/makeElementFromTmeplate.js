/**
 * Make DOM-element from string-template
 * @param tmplString {string} string with HTML template
 * @returns {Element} DOM element
 */

// const myDiv = makeElementFromTemplate(`<div id='test'>Разметка DOM-элемента</div>`);
const makeElementFromTemplate = (tmplString) => {
  const template = document.createElement(`template`);
  template.innerHTML = tmplString;
  return template.content;
};

export default makeElementFromTemplate;
