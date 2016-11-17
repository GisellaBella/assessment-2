window.onload=function(){

	var slowCyclist = document.getElementById('slowCyclist');
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

	function moveLeft() {
	            slowCyclist.style.left = 300 - '20px';
	                console.log("So, you've clicked the left arrow");
	        }
	 function moveRight() {
	            slowCyclist.style.right = 300 + '20px';
	                console.log("So, you've clicked the right arrow");
	        }

	    

};

