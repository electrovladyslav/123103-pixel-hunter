const main = document.querySelector(`main`);

const showScreen = (element) => {

  main.innerHTML = ``;

  main.appendChild(element);

  // а через клонирование не работает подписка на события
  // const clone = element.cloneNode(true);
  // main.appendChild(clone);

  /* elements.forEach((item) => {
    const clone = document.importNode(item, true);
    container.appendChild(clone);
  });*/
};

export default showScreen;
