'use strict';

const style = require('./style-snippets.js')

exports.arrangeListByDueDate = function() {};

exports.appendTask = function(selector, task) {
  selector.append(`<li class='task-item' id='${task.uuid}'></li>`);
  $(`#${task.uuid}`).text(task.title); // put text into task element
  
  $(`#${task.uuid}`).append(style.htmlSnippets.taskEditButton); // add edit button
  
  $(`#${task.uuid}`).append(style.htmlSnippets.taskDeleteButton); // add delete button
  
  $(`#${task.uuid} #task-edit-button`).on('click', function() { // Add edit button click listener
    $(`#${task.uuid}`).remove();
  });

  $(`#${task.uuid} #task-delete-button`).on('click', function() { // Add delete button click listener
    $(`#${task.uuid}`).remove();
  });
}

/**
 * When triggered, get the value in the input field.
 */
exports.getTaskTitleFromInput = function() {
  return $('#add-task-input').val()
}