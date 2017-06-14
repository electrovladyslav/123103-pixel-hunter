export default (level, game) => {
  return `<div class="game">
    <div class="game__lives">
      ${new Array(game.lives).fill(`<span class="game__live game__live--full"></span>`).join(``)}
      ${new Array(3 - game.lives).fill(`<span class="game__live game__live--empty"></span>`).join(``)}
    </div>
    <p class="game_timer">${game.questions[game.currentQuestion].time}</p>
    <p class="game__task">${level.task}</p>
    
    <form class="game__content ${level.contentWide}">
       
      ${level.options.map((optionItem, optionNumber, options) => {
        let result = `<div class="game__option">
              <img src="${optionItem.imgSrc}" alt="Option ${optionNumber + 1}" width="${optionItem.width}" height="${optionItem.height}">`;

        if (options.length < 3) {  // show answer icons
          result += `<label class="game__answer game__answer--photo">
                <input name="${optionItem.name}" type="radio" value="photo">
                <span>Фото</span>
              </label>
              <label class="game__answer game__answer--paint">
                <input name="${optionItem.name}" type="radio" value="paint">
                <span>Рисунок</span>
              </label>`;
        }
        result += `</div>`;
        return result;
      }).join(``)}
    </form>
    <div class="stats">
      <ul class="stats">
        ${game.stats.map((statsItem) => {
          return `<li class="stats__result stats__result--${statsItem}"></li>`;
        }).join(``)}
        ${new Array(10 - game.stats.length).fill(`<li class="stats__result stats__result--unknown">`).join(``)}
            </ul>
          </div>
        </p>`;
};
