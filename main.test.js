'use strict';

const $ = require('jquery')
const structure = require('./utils/structure-lib.js');
const style = require('./utils/style-snippets.js');
const utils = require('./utils/utils.js');
 
test('Task is successfully created', () => {
  let testTask = new structure.Task(
    'Test task.',
    'This is a long description',
    '11/04/993',
    'Test List'
  );
  
  expect(testTask.title).toBe('Test task.');
});