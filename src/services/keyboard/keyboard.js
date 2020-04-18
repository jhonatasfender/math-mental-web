import { ReturnCodeTextCHTML } from "../mathjax/math-return-code";

export class Keyboard {
  static get del() {
    return 'Del'
  }

  static init(click) {
    let keys = [
      7, 8, 9, '-',
      4, 5, 6, '',
      1, 2, 3, '',
      0, '.', this.del, ''
    ];

    this.numPadEl = $('<div/>').attr('id', 'numeric-keypad').addClass('numeric-keypad row');

    for (const key of keys) {
      let numPadKeyEl = $('<div/>').addClass('numeric-keypad-key col-3');

      let numPadButtonEl = $('<button/>').attr('data-key', key)
        .addClass('numeric-keypad-button')
        .on("click tap", click)

      if (key === '') numPadButtonEl.addClass('disabled')

      if (key === this.del) {
        numPadButtonEl.append($('<img/>').attr('src', 'assets/img/backspace-solid.svg'))
      } else {
        ReturnCodeTextCHTML.chtml(key.toString(), numPadButtonEl.get(0));
      }

      numPadKeyEl.append(numPadButtonEl);
      this.numPadEl.append(numPadKeyEl);
    }

    $("#app").append(this.numPadEl);

    $(document.body).off().bind("keydown", e => {
      let key = e.originalEvent.key;

      let el = this.numPadEl.find(`*[data-key="${key}"]`);

      if (el.get(0)) {
        el.click();
      } else if (e.originalEvent.keyCode === 16 || e.originalEvent.keyCode === 8) {
        this.numPadEl.find(`*[data-key=${this.del}]`).click();
      }
    })

  }
}
