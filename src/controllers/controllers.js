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

        console.log(result === resultUser, result, resultUser);
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
    console.log(this.x, this.y, this.operation);

    this.returnCode(this.operation);
  }

  returnCode(code) {
    let options = MathJax.getMetricsFor(this.span.get(0), true);
    MathJax.tex2chtmlPromise(code, options).then(html => {
      this.span.get(0).appendChild(html);
      let sheet = document.querySelector("#MJX-CHTML-styles");
      if (sheet) sheet.parentNode.removeChild(sheet);
      document.head.appendChild(MathJax.chtmlStylesheet());
    });
  }

  getRandomArbitrary(min, max) {
    min = parseInt(min);
    max = parseInt(max);
    return parseInt(Math.random() * (max - min) + min);
  }
}
