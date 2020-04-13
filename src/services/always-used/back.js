import { ReturnCodeTextCHTML } from "../mathjax/math-return-code";
import { Home } from "../../controllers/start/home";

export class Back {
  static init() {
    let back = $('<span/>').addClass('back')
    ReturnCodeTextCHTML.chtml('\\hookleftarrow', back.get(0));

    back.click(() => {
      $("#app").removeClass('full').empty();
      new Home($("#app"));
    });

    return back;
  }
}
