window.onload=function(){

	var slowCyclist = document.getElementById("slowCyclist");
	//var fastCyclist;

	document.addEventListener('keydown', moveCyclist);

	function moveCyclist(e) {
		e = e || window.event;
		if (e.keyCode == '37') { //left arrow
	    	moveLeft();
	    }
	    else if (e.keyCode == '39') { //right arrow
	        moveRight();
		}	
	}	
	moveCyclist();

	function moveLeft() {
		var margin = 20;
		margin --;//moving left
		document.getElementById("slowCyclist").style.marginLeft = margin - "px";
		}

	           
	 function moveRight() {
	 	var margin = 20;
		margin ++;//moving left
	    document.getElementById("slowCyclist").style.marginLeft = margin + "px";
	    console.log("So, you've clicked the right arrow");
		}
	        


};
