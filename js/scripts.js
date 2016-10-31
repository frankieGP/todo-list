//business-end
function ToDo (task){
  this.task = task;
}



//front-end
$(document).ready(function() {
  $("form#task-input").submit(function(event) {
    event.preventDefault();

var task = $("input#new-task").val();
var newTask = new Task(task);
$("ul#show-tasks").append("<li><span class ='task'>" + newTask.task + "<button type="submit" class="btn"></button></span></li>"));
debugger;
  });
});
