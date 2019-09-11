'use strict';

const structure = require('./utils/structure-lib.js');
const style = require('./utils/style-snippets.js');
const utils = require('./utils/utils.js');

$('document').ready(function () {
  let testTask = new structure.Task(
    'This task was created using jQuery.', // title
    'This is a long description of a test task.', // description
  );

  utils.appendTask($('.task-list'), testTask);

  // Add task listener
  $('#add-task-input').on('keyup', function (e) {
    console.log(`keyup detected in task title add field.`);
    if (e.keyCode === 13) {
      console.log('keyup: Enter detected.')

      let title = $('#add-task-input').val();
      console.log('title:');
      console.log(title);

      let createdTask = new structure.Task(title);
      console.log('createdTask:')
      console.log(createdTask);

      $('#add-task-input').val(''); // clear input field after enter
      utils.appendTask($('.task-list'), createdTask);
    }
  });

  $('#add-task-button').on('click', function () {
    let title = $('#add-task-input').val();
    console.log('title:');
    console.log(title);

    let createdTask = new structure.Task(title);
    console.log('createdTask:')
    console.log(createdTask);

    $('#add-task-input').val(''); // clear input field after enter
    utils.appendTask($('.task-list'), createdTask);

  });
});