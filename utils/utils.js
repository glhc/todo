'use strict';

exports.arrangeListByDueDate = function() {};

exports.appendtaskWithUuid = function(selector, id) {
  selector.append(`<li class='task-item ${id}'></li>`);
}