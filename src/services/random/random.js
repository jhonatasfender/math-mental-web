import { ReturnCodeTextCHTML } from "../mathjax/math-return-code";

export class Random {
  static getRandomNumbers() {
    let [min, max] = [0, 9];

    return parseInt(Math.random() * (max - min) + min);
  }

  static getRandom(operations) {
    let [x, y] = [Random.getRandomNumbers(), Random.getRandomNumbers()];

    operations.map(v => {
      if (v.x === x && v.y === y) {
        [x, y] = [Random.getRandomNumbers(), Random.getRandomNumbers()];
      }
    })

    return [x, y];
  }

  static history(app, operations, code, back) {
    return $('<img/>').attr('src', 'assets/img/history-solid.svg').addClass('history')
      .click(e => {
        app.empty();
        let row = $(`<div/>`).addClass('row history-list');

        operations.sort((a, b) => (a.x > b.x) ? 1 : ((b.x > a.x) ? -1 : 0));

        for (const values of operations) {
          let col = $(`<div/>`).addClass('col-3');

          row.append(col)
          ReturnCodeTextCHTML.chtml(code(values), col.get(0));
        }

        let historyBack = $('<img/>')
          .attr('src', 'assets/img/backward-solid.svg')
          .addClass('history-back')
          .click(back)

        app.append(row).append(historyBack)
      });
  }
}
