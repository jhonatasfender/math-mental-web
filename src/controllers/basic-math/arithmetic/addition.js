import { ReturnCodeTextCHTML } from '../../../services/mathjax/math-return-code';
import { Back } from "../../../services/always-used/back";

import { Random } from "../../../services/random/random";
import { App } from '../../../services/always-used/app';

export class Addition {
  constructor() {
    this.app = App.element;

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
      .each(e => {
        this.input.css('width', 0);
      })
      .blur(e => {
        this.input.focus();
      })
      .keyup(e => {
        this.input.css('width', (this.input.val().length * 5) + 'vw');

        let result = this.x + this.y;
        let resultUser = parseInt(this.input.val());

        if (result === resultUser) {
          setTimeout(() => {
            this.init();            
          }, 600);
        }
      });
  }

  getRandomArbitrary(min, max) {
    min = parseInt(min);
    max = parseInt(max);
    return parseInt(Math.random() * (max - min) + min);
  }
}
