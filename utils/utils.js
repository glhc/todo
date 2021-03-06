'use strict';

const style = require('./html-templates.js')

exports.appendTask = function(list, task) {
  list.append(`<li class='task-item' id='${task.uuid}'></li>`);
  $(`#${task.uuid}`).append(`<div class="task-title col-10 d-inline">${task.title}</div>`); // put text into task element
  //$(`${task.uuid}`).append(`<div id="task-button-container"></div>`);

  $(`#${task.uuid}`).append(style.htmlSnippets.taskEditButton); // add edit button
  
  $(`#${task.uuid}`).append(style.htmlSnippets.taskDeleteButton); // add delete button
  
  $(`#${task.uuid} #task-edit-button`).on('click', function() { // Add edit button click listener
    let removedStuff = $(`#${task.uuid} .task-title`).replaceWith(style.htmlSnippets.taskEditSearchBar);
      $(`#${task.uuid} #edit-task-input`).on('keyup', function(e) {
        console.log('keyup detected')
        if (e.keyCode === 13) {
          console.log('enter detected.')
          task.title = $(`#${task.uuid} #edit-task-input`).val();
          $(`#${task.uuid} #edit-task-input`).replaceWith(`<div class="task-title col-10 d-inline">${task.title}</div>`);
        }
      });
  });

  $(`#${task.uuid} #task-delete-button`).on('click', function() { // Add delete button click listener
    $(`#${task.uuid}`).remove();
  });
}

exports.editTask = function(selector, task) {
  $(`#${task.uuid}`).html(style.htmlSnippets.taskEditSearchBar);
}