'use strict';

const structure = require('./utils/constructors.js');
const style = require('./utils/html-templates.js');
const utils = require('./utils/utils.js');

$('document').ready(function () {
  let testTask = new structure.Task(
    'This task is a sample To-Do item.', // title
    'This is a long description of a test task.', // description
  );

  utils.appendTask($('.task-list'), testTask);
  initializePage();
  

})


/**
 * Wires up all buttons to actions, initializes all listeners that should be 
 * active at page load.
 */
function initializePage() {

  // Add listener for submittal of changed task title.
  $('#add-task-input').on('keyup', function (e) {
    if (e.keyCode === 13) {
      let title = $('#add-task-input').val();
      let createdTask = new structure.Task(title);

      $('#add-task-input').val(''); // clear input field after enter
      utils.appendTask($('.task-list'), createdTask);
    } 
  });

  $('#add-task-button').on('click', function () {
    let title = $('#add-task-input').val();
    let createdTask = new structure.Task(title);

    $('#add-task-input').val(''); // clear input field after enter
    utils.appendTask($('.task-list'), createdTask);
  });

  listenForMenuButton();
}

/**
 * Listens for the menu button click and modifies the page accordingly.
 */
function listenForMenuButton() {
  $('#menu-button').click(function() {
    $('aside').toggleClass('pushed');
    $('.wrapper').toggleClass('pushed');
  });

  $('#aside-menu-button').click(function() {
    $('aside').toggleClass('pushed');
    $('.wrapper').toggleClass('pushed');
  });
}

