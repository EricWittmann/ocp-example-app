
function addFoo() {
	$('#foo-summary').html('<span class="spinner spinner-xs spinner-inline"></span> Adding a foo...');
	$.ajax({
		method: "POST",
		url: CONFIG.apiUrl + "/foo",
		data: JSON.stringify({
			"name" : "Foo - " + Math.random(),
			"description": "A foo added by the simple UI on " + new Date()
		}),
		contentType: "application/json",
		headers: {
			'Authorization': 'bearer ' + window.CONFIG.accessToken
		},
		success: function(data, status, xhr) {
			listFoos();
			$('#foo-summary').html('');
		},
		error: function(data, status, xhr) {
			alert("Error adding foo.");
			$('#foo-summary').html('');
		}
	});
}


function listFoos() {
	$('#foo-list').html('<span class="spinner spinner-xs spinner-inline"></span> Searching Foos, please wait...');
	$.ajax({
		method: "GET",
		url: CONFIG.apiUrl + "/foo",
		headers: {
			'Authorization': 'bearer ' + window.CONFIG.accessToken
		},
		success: function(data, status, xhr) {
			var html;
			if (data.length == 0) {
				html = "<strong>No Foos found!  Add one?</strong>";
			} else {
				html = '<div><strong>Foo List</strong></div><div><table class="table table-striped table-bordered" style="font-size: 12px">';
				data.forEach(function(foo) {
					html += "<tr>";
					html +=   "<td>";
					html += foo.id;
					html +=   "</td>";
					html +=   "<td>";
					html += foo.name;
					html +=   "</td>";
					html += "</tr>";
				});
				html += "</table></div>";
			}
			$('#foo-list').html(html);
			console.info("Foos: %o", data);
		},
		error: function(xhr, status, error) {
			$('#foo-list').html('<div class="alert alert-danger"><span class="pficon pficon-error-circle-o"></span><strong>Error Getting Foos</strong> Failed to get the Foos!  Check console for details.</div>');
			console.info("Error Status: %s", status);
			console.info("Error: %o", error);
		}
	});
}


function deleteAllFoos() {
	$('#foo-list').html('<span class="spinner spinner-xs spinner-inline"></span> Deleting all Foos, please wait...');
	$.ajax({
		method: "DELETE",
		url: CONFIG.apiUrl + "/foo",
		headers: {
			'Authorization': 'bearer ' + window.CONFIG.accessToken
		},
		success: function(data, status, xhr) {
			$('#foo-list').html("<strong>No Foos found!  Add one?</strong>");
		},
		error: function(xhr, status, error) {
			$('#foo-list').html('<div class="alert alert-danger"><span class="pficon pficon-error-circle-o"></span><strong>Error Deleting Foos</strong> Failed to delete the Foos!  Check console for details.</div>');
			console.info("Error Status: %s", status);
			console.info("Error: %o", error);
		}
	});
}


$(document).ready(function() {
	$('#basic-init').html("<strong><span>Application (app.js) loaded!</span></strong>");
	if (window.CONFIG && window.CONFIG.apiUrl) {
		$('#config-info').removeClass('hidden');
		$('#input-api-url').val(CONFIG.apiUrl);
		$('#input-access-token').val(CONFIG.accessToken);
	}
	listFoos();
	$('#add-new-foo').click(addFoo);
	$('#delete-all-foos').click(deleteAllFoos);
});
