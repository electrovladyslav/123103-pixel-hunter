const templates = document.getElementsByTagName(`TEMPLATE`);
const main = document.getElementsByTagName(`MAIN`)[0];

function showScreen(templateNumber) {
  const clone = document.importNode(templates[templateNumber].content, true);
  main.innerHTML = ``;
  main.appendChild(clone);
}

showScreen(0);
