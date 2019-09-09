'use strict';

const uuidGen = require('uuid/v1');
const style = require('./style-snippets.js')

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
exports.Task = function (
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
exports.List = function (name, color) {
  this.name = name;
  this.uuid = uuidGen();
  this.tasks = [];

  // If list color wasn't selected, pick one from themese at random
  if (!color) {
    let colorNames = Object.keys(style.primaryColorMap);
    randomColorIndex = Math.floor(colorNames.length * Math.random());
    this.color =
      style.primaryColorList(randomColorIndex);
  } else {
    this.color = color;
  }

  this.addTask = function() {
    this.tasks.add(new Task(arguments));
  };

  this.deleteTask = function(uuid) {
    let taskIndex = this.findTaskByUuid(uuid);

    // If a hit was found, then delete that item from the array 
    if (taskIndex) {
      console.log(`Deleting item from list...`)
      let deletedContent = this.tasks.splice(index, 1);

      // Sanity checks
      if (deletedContent) {
        console.error(`No items found in list: ${this.name} with ` +
            `UUID: ${uuid}`);
      } else if (deletedContent.length > 1) {
        console.error(`Accidentally deleted ${deletedContent.length} items.`)
      } else if (deletedContent) {
        console.log(`Task was deleted from this list. ` +
        `UUID: ${this.tasks[i].uuid}`);
      }
    };
  };

  this.findTaskByUuid = function(uuid) {
    let index = null;

    console.log(`Trying to find log with UUID: ${uuid}`)
    // Find what the index of the task is with the UUID.
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i] === uuid) {
        index = i;

        if (index) { // exit the search if a hit is found.
          return index;
        }
      }
    }
    
    throw new Error(`UUID: ${uuid} not found in list: ${this.name}.`);
  }
};
