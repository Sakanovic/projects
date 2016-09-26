$(document).ready(function() {
	//Employee Status Widget
  var url = "data/employees.json";
  $.getJSON(url, function (data) {
    var statusHTML = '<ul class="bulleted">';
    $.each(data, function (index, employee) {
      if (employee.inoffice === true) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employee.name + '</li>';
    });
    statusHTML += '</ul>';
    $('#employeeList').html(statusHTML);
  }); // end get JSON
	
	//Conference Room Availability Widget
	var conferenceRoomData = "data/rooms.json";
	$.getJSON(conferenceRoomData, function(roomsData) {
		var statusHTML = '<ul class="rooms">';
		$.each(roomsData, function(index, room) {
			if(room.available === true) {
				statusHTML += '<li class="empty">';
			}else{
				statusHTML += '<li class="full">';
			}
			statusHTML += room.room + '</li>';
		});
		statusHTML += '</ul>';
		$('#roomList').html(statusHTML);
	});
	
}); // end ready