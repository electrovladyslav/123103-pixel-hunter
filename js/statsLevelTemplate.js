import calculateResults from './calculateResults';

export default (game) => {
  const results = calculateResults(game);
  let template = `
    <div class="result">
      <h1>${(results.lives > 0) ? results.headerWin : results.headerFail}</h1>
      
      <table class="result__table">
        <tr>
          <td class="result__number">1.</td>
          <td colspan="2">
            <ul class="stats">
            ${results.stats.map((statItem) => {
              return `<li class="stats__result stats__result--${statItem}"></li>`;
            }).join(``)}
            ${new Array(10 - results.stats.length).fill(`<li class="stats__result stats__result--unknown">`).join(``)}
            </ul>
          </td>
          <td class="result__points">×&nbsp;${results.factors[`correct`]}</td>
          <td class="result__total">${results.totalPoint}</td>
        </tr>`
        + `${results.thisGame.extras.map((extra) => {
          return `<tr>
          <td></td>
          <td class="result__extra">${extra.title}</td>
          <td class="result__extra">${extra.result}&nbsp;<span class="stats__result stats__result--${extra.icon}"></span></td>
          <td class="result__points">×&nbsp;${Math.abs(extra.factor)}</td>
          <td class="result__total">${extra.result * extra.factor}</td>
        </tr>
        <tr>`;
        }).join(``)}
        <tr>
          <td colspan="5" class="result__total  result__total--final">950</td>
        </tr>
      </table>
      
      <table class="result__table">
        <tr>
          <td class="result__number">2.</td>
          <td>
            <ul class="stats">
              ${results.prevGame.stats.map((statItem) => {
                return `<li class="stats__result stats__result--${statItem}"></li>`;
              }).join(``)}
            </ul>
          </td>
          <td class="result__total"></td>
          <td class="result__total  result__total--final">${results.prevGame.final}</td>
        </tr>
      </table>
      
      <table class="result__table">
        <tr>
          <td class="result__number">3.</td>
          <td colspan="2">
            <ul class="stats">
              ${results.prevGame2.stats.map((statItem) => {
                return `<li class="stats__result stats__result--${statItem}"></li>`;
              }).join(``)}
            </ul>
          </td>
          <td class="result__points">×&nbsp;${results.prevGame2.factor}</td>
          <td class="result__total">${results.prevGame2.final}</td>
        </tr>
        ${results.prevGame2.extras.map((extra) => {
          return `<tr>
            <td></td>
            <td class="result__extra">${extra.title}</td>
            <td class="result__extra">${extra.result}&nbsp;<span class="stats__result stats__result--${extra.icon}"></span></td>
            <td class="result__points">×&nbsp;${Math.abs(extra.factor)}</td>
          <td class="result__total">${extra.result * extra.factor}</td>
            </tr>
            <tr>`;
        }).join(``)}
        <tr>
          <td colspan="5" class="result__total  result__total--final">${results.prevGame2.final}</td>
        </tr>
      </table>
    </div>
    `;
  return template;
};
