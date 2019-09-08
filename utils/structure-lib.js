'use strict';

const uuidGen = require('uuid/v1');

/**
 * Constructs task objects.
 * @constructor
 * @param {String} title - The short version of the task. Max 50 characters.
 * @param {String} description - The long version of what the task is.
 * @param {*} dueDate - The date the task is due for completion by.
 * - Should be implemented with moment.js.
 * - Should be DD/MM/YYYY format.
 * @param {String} list - The name of the list which this task belongs to.
 * Defaults to inbox.
 */
const Task = function (
      title, description, dueDate, tags, isCompleted = false, list = 'inbox'
      ) {
  this.title = title;
  this.uuid = uuidGen();
  this.description = description;
  this.list = list;
  this.tags = tags;
  this.dueDate = moment(dueDate);
  this.isCompleted = isCompleted;
  this.comments = [];
  this.update = function(
      title, descriptions, dueDate, tags, isCompleted = false, list
      ) {
  };
  this.Comment = function (message) {
    this.message = message;
  }
};


/**
* Creates a To-Do list.
* @constructor
* @param {String} name - The name of the list.
* @param {String} color - The color to be selected, e.g. 'yellow'.
* Defaults to a random color from primaryColorList.
*/
const List = function (name, color) {
  this.name = name;
  this.uuid = uuidGen();
  this.tasks = [];

  // If there isn't a color, pick one at random
  if (!color) {
    let colorNames = Object.keys(primaryColorMap);
    randomColorIndex = Math.floor(colorNames.length * Math.random());
    this.color =
      primaryColorList(randomColorIndex);
  } else {
    this.color = color;
  }
  this.addTask = function() {
    this.tasks.add(new Task(arguments));
  };
  this.deleteTask = function(uuid) {
    let index = null;
    console.log(`Trying to find log with UUID: ${uuid}`)
    // Find what the index of the task is with the UUID.
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i] === uuid) {
        index = i;
      }
    };

    // If a hit was found, then delete that item from the array 
    if (index) {
      console.log(`Task was deleted from this list. ` +
          `UUID: ${this.tasks[i].uuid}`);

      this.tasks = this.tasks.slice(0, index) +
          this.tasks.slice(index, tasks.length);
    };
  };
};
