'use strict';

const shortid = require('shortid');
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
exports.Task = function (title) {
  this.title = title;
  this.uuid = shortid.generate();
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
    this.tasks.add(new Task());
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
    }
  }
}