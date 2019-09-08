'use strict';

const structure = require('./utils/structure-lib.js');
const style = require('./utils/style-snippets.js');

let taskArea = $('section')

taskArea.append(style.htmlSnippets.task);

let testButton = $('button').eq(0);
testButton.click(function() {
  testButton.fadeToggle();
});

