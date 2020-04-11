import { ReturnCodeTextCHTML } from "../../../services/mathjax/math-return-code";

export class Controllers {
  constructor() {
    this.app = $("#app");
    this.input = $(`<input type="text">`);
    this.span = $(`<span>`);

    this.app.append(this.span).append(this.input);

    this.init();

    this.input
      .focus()
      .blur(e => {
        this.input.focus();
      })
      .keyup(e => {
        this.input.val(this.input.val().replace(/[^\d]+/g, ""));
        let result = this.x + this.y;
        let resultUser = parseInt(this.input.val());

        if (result === resultUser) {
          this.init();
          this.input.focus().val("");
        }
      });
  }

  init() {
    $(".MathJax").remove();

    this.x = this.getRandomArbitrary(0, 9);
    this.y = this.getRandomArbitrary(0, 9);

    this.operation = `${this.x} + ${this.y} = `;

    ReturnCodeTextCHTML.chtml(this.operation, this.span.get(0));
  }

  getRandomArbitrary(min, max) {
    min = parseInt(min);
    max = parseInt(max);
    return parseInt(Math.random() * (max - min) + min);
  }
}
