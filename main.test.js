'use strict';

const main = require("./utils/structure-lib.js");
 
test('Task is successfully created', () => {
  let testTask = new main.Task(
    'Test task.',
    'This is a long description',
    '11/04/993',
    'Test List'
  );
  
  expect(testTask.title).toBe('Test task.');
});