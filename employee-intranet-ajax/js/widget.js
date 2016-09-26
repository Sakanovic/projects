// Employee List Widget
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if(xhr.readyState === 4 && xhr.status === 200) {
    var employees = JSON.parse(xhr.responseText);
    var statusHTML = '<ul class="bulleted">';
    for (var i = 0; i < employees.length; i++) {
      if (employees[i].inoffice === true) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};
xhr.open('GET', 'data/employees.json');
xhr.send();

//Conference Room List Widget
var roomList = new XMLHttpRequest();
roomList.onreadystatechange = function() {
	if(roomList.readyState === 4 && roomList.status === 200) {
		var rooms = JSON.parse(roomList.responseText);
		var statusHTML = '<ul class="rooms">';
		for(var i = 0; i < rooms.length; i++) {
			if (rooms[i].available === true) {
				statusHTML += '<li class="empty">';
			} else {
				statusHTML += '<li class="full">';
			}
			statusHTML += rooms[i].room;
			statusHTML += '</li>';
		}
		statusHTML += '</ul>';
		document.getElementById('roomList').innerHTML = statusHTML;
	}
};
roomList.open('GET', 'data/rooms.json');
roomList.send();