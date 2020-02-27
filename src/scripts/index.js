console.log('webpack starterkit');

import '../styles/index.scss';
import $ from "jquery";

/**
 * http://latex.codecogs.com/eqneditor/editor.php
 */

// http://latex.codecogs.com/png.latex?%5Cdpi%7B300%7D%20%5Cfn_jvn%20%5Chuge%20%5Cdiv

const dpi = (dpi) => dpi ? `\\dpi{${dpi}}` : "\\dpi{300}";

const returnImage = (text, _dpi) => `<img class="col-12" src="http://latex.codecogs.com/png.latex?${dpi(_dpi)} \\fn_jvn \\huge ${text}" />`;

const img = (selector, text) => {
  $(selector).html(returnImage(text));
};

img('.sum', '+');
img('.subtraction', '-');
img('.multiplication', '\\times');
img('.division', '\\div');
img('.percent', '\\%');
img('.sqrt', '\\sqrt{x}');

$('.sum').click((e) => {
  $(e.target).parents('.row').find('.default').addClass('execute');
  $(".result").removeClass('hidden');

  let sum = "";
  for (let i = 0; i < 10; i++) {
    sum += returnImage("2 + 2 = 4", 100);
  }
  $(".result").removeClass("result").addClass("result").html(`<div class="row">${sum}</div>`);
});
