'use strict';

const style = require('./style-snippets.js')

exports.arrangeListByDueDate = function() {};

exports.appendTask = function(selector, task) {
  selector.append(`<li class='task-item' id='${task.uuid}'></li>`);
  $(`#${task.uuid}`).text(task.title)
    .append(style.htmlSnippets.taskAddButton)
  
  $(`${task.uuid}`)

}

/**
 * When triggered, get the value in the input field.
 */
exports.getTaskTitleFromInput = function() {
  return $('#add-task-input').val()
}