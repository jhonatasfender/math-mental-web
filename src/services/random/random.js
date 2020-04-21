import { ReturnCodeTextCHTML } from "../mathjax/math-return-code";

export class Random {
  static getRandomNumbers() {
    let [min, max] = [0, 9];

    return parseInt(Math.random() * (max - min) + min);
  }

  static getRandom(operations) {
    let [x, y] = [Random.getRandomNumbers(), Random.getRandomNumbers()];

    while (operations.find(v => v.x === x && v.y === y)) {
      [x, y] = [Random.getRandomNumbers(), Random.getRandomNumbers()];
    }

    return [x, y];
  }

  static history(app, operations, code,executOp, back) {
    return $('<img/>').attr('src', 'assets/img/history-solid.svg').addClass('history')
      .on('click tab', e => {
        app.empty();
        let row = $(`<div/>`).addClass('row history-list');

        operations.sort((a, b) => (a.x > b.x) ? 1 : ((b.x > a.x) ? -1 : 0));
        let order = [];

        operations.map(v => {
          if (!order[v.x]) order[v.x] = []
          if (!order[v.x][v.y]) order[v.x][v.y] = []
          order[v.x][v.y] = executOp(v);
        })

        for (let x = 0; x < 10; x++) {
          let colX = $(`<div/>`).addClass('col-3');
          row.append(colX);
          for (let y = 0; y < 10; y++) {
            let colY = $(`<div/>`).addClass('col-12');
            colX.append(colY);
            ReturnCodeTextCHTML.chtml(code(order, x, y), colY.get(0));
          }
        }

        let historyBack = $('<img/>')
          .attr('src', 'assets/img/backward-solid.svg')
          .addClass('history-back')
          .on('click tab', back)

        app.append(row).append(historyBack)
      });
  }
}
