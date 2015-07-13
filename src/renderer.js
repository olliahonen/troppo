var SymbolView = require('./views/SymbolView.js');

var element = document.querySelector('#characterDisplay');

var init = function () {
  SymbolView.characterDisplay.subscribe(render);
};

var render = function (content) {
  element.innerHTML = content;
};

module.exports = {
  init: init
};
