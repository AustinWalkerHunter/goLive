document.getElementById('assignmentInputForm').addEventListener('submit', saveAssignment);

function saveAssignment(e) {
  var assignmentDesc = document.getElementById('assignmentDescInput').value;
  var assignmentPriority = document.getElementById('assignmentPriorityInput').value;
  var assignmentProgress = document.getElementById('progressInput').value;
  var assignmentId = chance.guid();
  var assignmentStatus = 'In Progress';
  var assignmentDueDate = document.getElementById('duedate').value;  


  var assignment = {
    id: assignmentId,
    description: assignmentDesc,
    priority: assignmentPriority,
    dueDate: assignmentDueDate,
    progress: assignmentProgress,
    status: assignmentStatus
  }

  if (localStorage.getItem('assignments') == null) {
    var assignments = [];
    assignments.push(assignment);
    localStorage.setItem('assignments', JSON.stringify(assignments));
  } else {
    var assignments = JSON.parse(localStorage.getItem('assignments'));
    assignments.push(assignment);
    localStorage.setItem('assignments', JSON.stringify(assignments));
  }

  document.getElementById('assignmentInputForm').reset();

  fetchAssn();

  e.preventDefault();
}

function setStatusClosed(id) {
  var assignments = JSON.parse(localStorage.getItem('assignments'));

  for (var i = 0; i < assignments.length; i++) {
    if (assignments[i].id == id) {
      assignments[i].status = 'Complete';
    }
  }

  localStorage.setItem('assignments', JSON.stringify(assignments));

  fetchAssn();
}

function deleteAssignment(id) {
  var assignments = JSON.parse(localStorage.getItem('assignments'));

  for (var i = 0; i < assignments.length; i++) {
    if (assignments[i].id == id) {
      assignments.splice(i, 1);
    }
  }

  localStorage.setItem('assignments', JSON.stringify(assignments));

  fetchAssn();
}

function fetchAssn() {
  var assignments = JSON.parse(localStorage.getItem('assignments'));
  var assignmentsList = document.getElementById('assignmentsList');

  assignmentsList.innerHTML = '';

  for (var i = 0; i < assignments.length; i++) {
    var id = assignments[i].id;
    var desc = assignments[i].description;
    var priority = assignments[i].priority;
    var dueDate = assignments[i].dueDate;
    var progress = assignments[i].progress;
    var status = assignments[i].status;

    assignmentsList.innerHTML +=   '<div class="well">'+
                              '<h6>Assignment ID: ' + id + '</h6>'+
                              '<p><span class="label label-info">' + status + '</span></p>'+
                              '<h3>' + desc + '</h3>'+
                              '<h5> PRIORITY:   ' + priority + '</h5>'+
                              '<p><span class="glyphicon glyphicon-time"></span> DUE DATE:    ' + dueDate + '</p>'+
                              '<p><span class="glyphicon glyphicon-user"></span> ' + progress + '</p>'+
                              '<a href="#" onclick="setStatusClosed(\''+id+'\')" class="btn btn-warning">Completed</a> '+
                              '<a href="#" onclick="deleteAssignment(\''+id+'\')" class="btn btn-danger">Delete</a>'+
                              '</div>';
  }
}
