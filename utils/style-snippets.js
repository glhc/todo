'use strict';

/** Probably move this off to a module later */
exports.primaryColorMap = {
  yellow: '#b58900',
  orange: '#cb4b16',
  red: '#dc322f',
  magenta: '#d33682',
  violet: '6c71c4',
  blue: '#268bd2',
  cyan: '#2aa198',
  green: '#859900',
};

exports.htmlSnippets = {
  taskTemplate: `<li class='task'></div>`,
  taskTitle: `<div class='task-title col-8'>Task Title</div>`,
  taskDeleteButton: `<button class='col-1 material-icons' id='task-delete-button'>delete</button>`,
  taskEditButton: `<button class='col-1 material-icons' id='task-edit-button'>edit</button>`,
  taskUpdateButton: `<div class='task-update-button col-1>Update Task</div>`,
  taskAddButton: `<div class='task-add-button col-1>Add Task</div>`,
};