import AbstractView from '../AbstractView';
import calculateResults from '../misc/functions/calculateResults';

export default class RulesView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
  }

  get template() {
    let tablesCounter = 0;
    const makeTable = (result) => {
      let table = `<table class="result__table">
        <tr>
          <td class="result__number">${++tablesCounter}</td>
          <td colspan="2">
            <ul class="stats">
            ${result.stats.map((statItem) => {
              return `<li class="stats__result stats__result--${statItem}"></li>`;
            }).join(``)}
            ${new Array(10 - result.stats.length).fill(`<li class="stats__result stats__result--unknown">`).join(``)}
            </ul>
          </td>
          <td class="result__points">×&nbsp;${result.correct.factor}</td>
          <td class="result__total
          ${(result.win) ? `">` + result.correct.points : ` result__total--final">` + result.header}</td>
        </tr>`;
      if (result.win) {
        table += `
        ${Object.entries(result.bonuses).map((entry) => {
          const bonus = entry[1];
          if (Math.abs(bonus.points) > 0) {
            return `<tr>
            <td></td>
            <td class="result__extra">${bonus.name}</td>
            <td class="result__extra">${bonus.quantity}&nbsp;<span class="stats__result stats__result--${bonus.icon}"></span></td>
            <td class="result__points">×&nbsp;${Math.abs(bonus.factor)}</td>
            <td class="result__total">${bonus.points}</td>
          </tr>
          <tr>`;
          } else {
            return ``;
          }
        }).join(``)}
        <tr>
          <td colspan="5" class="result__total  result__total--final">${result.totalPoints}</td>
        </tr>`;
      }
      table += `</table>`;
      return table;
    };

    const result = calculateResults(this.state);
    let template = `
    <div class="result">
      <h1>${result.header}</h1>`;

    template += makeTable(result)
      + makeTable(calculateResults(this.state.prevGamesResults[0]))
      + makeTable(calculateResults(this.state.prevGamesResults[1]))
      + `</div>`;
    return template;
  }
}
