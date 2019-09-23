'use strict';

const $ = require('jquery')
const structure = require('../utils/constructors.js');
const style = require('../utils/html-templates.js');
const utils = require('../utils/utils.js');
 
test('Task is successfully created', () => {
  let testTask = new structure.Task(
    'Test task.',
    'This is a long description',
    '11/04/993',
    'Test List'
  );
  
  expect(testTask.title).toBe('Test task.');
});


test('List is created with correct name.', () => {
  let testList = new structure.List('Inbox');
  
  expect(testList.name).toBe('Inbox');
});