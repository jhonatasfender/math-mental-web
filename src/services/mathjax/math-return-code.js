export class ReturnCodeTextCHTML {
  static chtml(code, node) {
    let options = MathJax.getMetricsFor(node, true);
    MathJax.tex2chtmlPromise(code, options).then(html => {
      node.appendChild(html);
      let sheet = document.querySelector("#MJX-CHTML-styles");
      if (sheet) sheet.parentNode.removeChild(sheet);
      document.head.appendChild(MathJax.chtmlStylesheet());
    });
  }
}
