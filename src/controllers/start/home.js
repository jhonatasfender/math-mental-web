import { Addition } from "../basic-math/arithmetic/addition";
import { ReturnCodeTextCHTML } from "../../services/mathjax/math-return-code";

export class Home {
  constructor(app) {
    this.app = app;

    this.valuesCols = [
      { code: "a + b", func: Addition },
      { code: "a - b", func: null },
      { code: "a \\times b", func: null },
      { code: "\\frac{a}{b}", func: null },
      { code: "\\sqrt{a}", func: null },
      { code: "a^b", func: null },
      { code: "a\\%", func: null },
    ];

    this.row = $("<div/>").addClass("row");

    for (const object of this.valuesCols) {
      let col = $("<div/>").addClass("col-4").attr("function", object.code);
      col.html(ReturnCodeTextCHTML.chtml(object.code, col.get(0)));
      col.click(e => {
        let action = $(e.target).attr("function") ? $(e.target).attr("function") : $(e.target).parents("div.col-4").attr("function");

        if (action) {
          let find = this.valuesCols.find((v) => {
            return v.code === action
          })

          new find.func();
        }
      })
      this.row.append(col)
    }

    this.app.append(this.row);
  }
}
