const $ = require('jquery');
const structure = require('../utils/constructors.js');

describe('Task', () => {
  test('records its title correctly.', () => {
    let testTask = new structure.Task('Test task.');
    expect(testTask.title).toBe('Test task.');
  });
});

describe('List', () => {
  test('is created with correct name.', () => {
    let testList = new structure.List('Inbox');
    expect(testList.name).toBe('Inbox');
  });

  test('.addTask() method adds item to List.tasks', () => {
    let testList = new structure.List('Inbox');
    testList.addTask('TestTask')

    expect(testList.tasks.length).toBe(1);
  });

  test('.addTask() method adds item to List.tasks', () => {
    let testList = new structure.List('Inbox');
    testList.addTask('TestTask')
    expect(testList.tasks[0]).toBeInstanceOf(structure.Task);
  });

  test('is an instance of List object', () => {
    let testList = new structure.List('Inbox');
    testList.addTask('Test Task');
    expect(testList).toBeInstanceOf(structure.List);
  });

  test('Should have a color', () => {
    let testList = new structure.Task('Inbox');
    
    expect(testList.color).toBeDefined
  })
});