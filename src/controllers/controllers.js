import { ReturnCodeTextCHTML } from "../services/mathjax/math-return-code";

export class Controllers {
  constructor() {
    this.app = $("#app");

    this.valuesCols = [
      "a + b",
      "a - b",
      "a \\times b",
      "\\frac{a}{b}",
      "\\sqrt{a}",
      "a^b",
      "a\\%"
    ];

    this.row = $("<div/>").addClass("row");

    for (const code of this.valuesCols) {
      let col = $("<div/>").addClass("col-4").attr("function", code);
      col.html(ReturnCodeTextCHTML.chtml(code, col.get(0)));
      col.click(e => {
        console.log($(e.target).parents("div.col-4"), $(e.target).parents("div.col-4").attr("function"));
      })
      this.row.append(col)
    }

    this.app.append(this.row);
  }
}
