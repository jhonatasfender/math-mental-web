import { ReturnCodeTextCHTML } from '../../../services/mathjax/math-return-code';
import { Back } from "../../../services/always-used/back";

import { Random } from "../../../services/random/random";
import { RemoveCharacters } from '../../../services/always-used/remove-characters';

export class Addition {
  constructor() {
    this.app = $('#app');

    this.init();
  }

  init() {
    $("#app").empty();

    this.input = $(`<input type='number'>`);
    this.span = $(`<span>`);

    this.app.append(Back.init()).append(this.span).append(this.input);

    this.x = Random.getRandomNumbers();
    this.y = Random.getRandomNumbers();

    Random.progress += 1;

    this.operation = `${this.x} + ${this.y} = `;

    ReturnCodeTextCHTML.chtml(this.operation, this.span.get(0));

    this.eventClick();
  }

  eventClick() {
    this.input
      .focus()
      .blur(e => {
        this.input.focus();
      })
      .keyup(e => {
        let result = this.x + this.y;
        let resultUser = parseInt(this.input.val());

        if (result === resultUser) {
          this.init();
        }
      });
  }

  getRandomArbitrary(min, max) {
    min = parseInt(min);
    max = parseInt(max);
    return parseInt(Math.random() * (max - min) + min);
  }
}
