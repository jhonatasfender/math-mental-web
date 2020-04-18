import { ReturnCodeTextCHTML } from '../../../services/mathjax/math-return-code';
import { Back } from "../../../services/always-used/back";

import { Random } from "../../../services/random/random";
import { App } from '../../../services/always-used/app';
import { Keyboard } from '../../../services/keyboard/keyboard';

export class Multiplication {
  constructor() {
    this.app = App.element;

    this.operations = [];

    this.init();
  }

  init() {
    this.app.empty();

    let row = $(`<div/>`).addClass('row');
    this.div = $(`<div/>`).addClass('col-12');

    this.resultUser = '';

    row.append(this.div);

    this.app.append(Back.init()).append(row)

    let random = Random.getRandom(this.operations);
    [this.x, this.y] = random;

    this.app.append(Random.history(
      this.app, this.operations,
      values => {
        return `${values.x} \\times ${values.y} = ${values.x * values.y}`
      },
      e => {
        this.init()
      }
    ))

    this.operation = `${this.x} \\times ${this.y} = `;

    ReturnCodeTextCHTML.chtml(this.operation, this.div.get(0));

    Keyboard.init(e => {
      let action = $(e.target).attr("data-key") ? $(e.target).attr("data-key") : $(e.target).parents("button").attr("data-key");
      this.div.empty();

      if (Keyboard.del === action) {
        this.operation = this.operation.slice(-2) !== "= " ? this.operation.slice(0, -1) : this.operation;
        this.resultUser = this.resultUser.slice(0, -1)
      } else {
        this.operation += action

        let result = this.x * this.y;
        this.resultUser += action.toString();

        if (result == this.resultUser) {
          this.operations.push({ x: this.x, y: this.y })
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
