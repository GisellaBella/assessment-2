window.onload=function(){
	var margin = 0;
	var slowCyclist = document.getElementById("slowCyclist");
	var fastCyclist = document.getElementById("fastCyclist");

	document.addEventListener('keydown', moveCyclist);

	function moveCyclist(e) {

		e = e || window.event;
		if (e.keyCode == '37') { //left arrow
	    slowGuy();	    
	    console.log("left arrow");
	    }

	    else if (e.keyCode == '38') { //up arrow
	    slowGuyFaster();
	    fastGuyWind();
	    console.log("up arrow");
	    }	

	   	 else if (e.keyCode == '39') { //right arrow
	    fastGuy();
	    slowGuyWind();   	    
	    console.log("right arrow");
		}
		
		 else if (e.keyCode == '40') { //down arrow
	        fastGuyFaster();    	    
	    console.log("down arrow");
		}		
	}	

	function slowGuy() {
		margin = margin+5;
		margin ++;//moving right
		document.getElementById("slowCyclist").style.marginLeft = margin + "px";
		}

	           
	 function slowGuyFaster() {
	 	margin = margin+15;
		margin ++;//moving right
	    document.getElementById("slowCyclist").style.marginLeft = margin + "px";
		}

	function fastGuy() {
		margin = margin+2;
		margin ++;//moving right
		document.getElementById("fastCyclist").style.marginLeft = margin + "px";
		}

	function fastGuyFaster() {
		margin = margin+12;
		margin ++;//moving right
		document.getElementById("fastCyclist").style.marginLeft = margin + "px";
		}

	function fastGuyWind() {
		margin = margin-5;
		margin ++;//loses speed
		document.getElementById("fastCyclist").style.marginLeft = margin + "px";
		}

	function slowGuyWind() {
		margin = margin-2;
		margin ++;//loses speed
		document.getElementById("slowCyclist").style.marginLeft = margin + "px";
		}




	
	        
	        


};