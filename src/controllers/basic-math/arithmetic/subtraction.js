import { ReturnCodeTextCHTML } from '../../../services/mathjax/math-return-code';
import { Back } from "../../../services/always-used/back";

import { Random } from "../../../services/random/random";
import { App } from '../../../services/always-used/app';
import { Keyboard } from '../../../services/keyboard/keyboard';

export class Subtraction {
  constructor() {
    this.app = App.element;

    this.init();
  }

  init() {
    $("#app").empty();

    let row = $(`<div>`).addClass('row');
    this.div = $(`<div>`).addClass('col-12');

    this.resultUser = '';

    row.append(this.div);

    this.app.append(Back.init()).append(row)

    this.x = Random.getRandomNumbers();
    this.y = Random.getRandomNumbers();

    Random.progress += 1;

    this.operation = `${this.x} - ${this.y} = `;

    ReturnCodeTextCHTML.chtml(this.operation, this.div.get(0));

    Keyboard.init(e => {
      let action = $(e.target).attr("data-key") ? $(e.target).attr("data-key") : $(e.target).parents("button").attr("data-key");
      this.div.empty();

      if (Keyboard.del === action) {
        this.operation = this.operation.slice(-2) !== "= " ? this.operation.slice(0, -1) : this.operation;
        this.resultUser = this.resultUser.slice(0, -1)
      } else {
        this.operation += action

        let result = this.x - this.y;
        this.resultUser += action.toString();

        if (result == this.resultUser) {
          setTimeout(() => {
            this.init();
          }, 600);
        }
      }

      this.div.empty();
      ReturnCodeTextCHTML.chtml(this.operation, this.div.get(0));
    });
  }
}
