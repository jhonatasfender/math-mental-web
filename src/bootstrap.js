import { Controllers } from "./controllers/controllers";

export class Bootstrap {
  static init() {
    $.getScript(
      "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
    ).done((script, textStatus) => {
      $("document").ready(function() {
        MathJax.typesetPromise()
          .then(() => {
            // modify the DOM here
            MathJax.typesetPromise();
          })
          .catch(err => console.log(err.message));

        new Controllers();
      });
    });
  }
}
