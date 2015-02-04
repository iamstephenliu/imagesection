$(document).ready(function(){

	var windowWidth = $('#photography').width();
    $("#displayimage").width(windowWidth);

    var imageHeight = windowWidth * 0.65;
	$('#photography').height(imageHeight);

    $('#previous').click(function(){
        var rel = $('#displayimage').attr('rel');
        if (rel == "1") {
        	rel = 23;
        	$("#image").html("<img src='photography/" + rel + ".jpg' rel='" + rel + "' id='displayimage'/>");
        	$("#displayimage").width(windowWidth);
        } else {
        	rel--;
        	$("#image").html("<img src='photography/" + rel + ".jpg' rel='" + rel + "' id='displayimage'/>");
        	$("#displayimage").width(windowWidth);
        }
    })

    $('#next').click(function(){
        var rel = $('#displayimage').attr('rel');
        if (rel == "23") {
        	rel = 1;
        	$("#image").html("<img src='photography/" + rel + ".jpg' rel='" + rel + "' id='displayimage'/>");
        	$("#displayimage").width(windowWidth);
        } else {
        	rel++;
        	$("#image").html("<img src='photography/" + rel + ".jpg' rel='" + rel + "' id='displayimage'/>");
        	$("#displayimage").width(windowWidth);
        }
    })

    $(window).resize(function(){
	    var windowWidth = $('#photography').width();
	    $("#displayimage").width(windowWidth);

	    var imageHeight = windowWidth * 0.65;
		$('#photography').height(imageHeight);
	});

});