(function() {
	//select all hover boxes from page
	//boxesHover is an array
	var boxesHover = document.getElementsByClassName('hover-image');

	//make a loop to go every hover box
	for(var i = 0 ; i < boxesHover.length ; i++) {
		boxesHover[i].addEventListener('click', function() {
			alert('am dat click pe item');
		});
	}

})();