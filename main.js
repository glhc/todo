'use strict';

const moment = require('moment');

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
const Task = function(title, description, dueDate, tags, isCompleted = false, list = 'inbox') {
  this.title = title;
  this.description = description;
  this.list = list;
  this.dueDate = moment(dueDate);
  this.isCompleted = isCompleted;
  this.comments = [];
}

export * from ...;