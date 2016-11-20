window.onload=function() {
// make sure document is loaded before running js

// checking that JS file is attached to HTML 
console.log("Javascript is working!");

	var margin = 0;
	var slowCyclist = document.getElementById("slowCyclist");
	var fastCyclist = document.getElementById("fastCyclist");

	document.addEventListener('keydown', moveCyclist);
	//Moving the Cyclists with Keyfunctions
	function moveCyclist(e) {
			e = e || window.event;


			if (e.keyCode == '38') { //up arrow
		    slowGuyFaster();	 
			console.log("up arrow");
		    }

		     else if (e.keyCode == '39') { //right arrow
		    fastGuyFaster();   
		    console.log("right arrow");
			}
	}

	document.addEventListener('keyup', detectWinner); //Had to create a keyup event because when I called the detectwinner function in moveCyclist function it was behaving rather oddly. Linking the two divs, adding margin to both fastracer and slowracer.
	
	/* For now keeping the speed and racer function simple- to 2 keys, so commenting out additional key functions.

		    else if (e.keyCode == '37') { //left arrow
		    slowGuy();
		    detectWinner();
		    console.log("up arrow");
		    }	

		    else if (e.keyCode == '16') { //shift key
		    slowGuyWind();
		    detectWinner();  	    
		    console.log("right arrow");
			}
			
		   	 else if (e.keyCode == '') { //right arrow
		    fastGuy();
		    detectWinner();
		    console.log("right arrow");
			}
			
		    else if (e.keyCode == '') { //return key
		    fastGuyWind();
		    detectWinner();
		    console.log("return key");
		    }

				
	function slowGuy() {
		margin = margin+5;
		margin ++;//moving right
		document.getElementById("slowCyclist").style.marginLeft = margin + "px";
		}           
	 
	function fastGuy() {
		margin = margin+2;
		margin ++;//moving right
		document.getElementById("fastCyclist").style.marginLeft = margin + "px";
		}

	
	function fastGuyWind(){
		margin = margin-5;
		margin ++;//loses speed
		document.getElementById("fastCyclist").style.marginLeft = margin + "px";
		}

	function slowGuyWind() {
		margin = margin-2;
		margin ++;//loses speed
		document.getElementById("slowCyclist").style.marginLeft = margin + "px";
		}     
*/


function slowGuyFaster() {
	 	margin = margin+15;
		margin ++;//moving right
		document.getElementById("slowCyclist").style.marginLeft = margin + "px";
		return margin;
		}

function fastGuyFaster() {
		margin = margin+15;
		margin ++;//moving right
		document.getElementById("fastCyclist").style.marginLeft = margin + "px";
		return margin;
		}

function detectWinner() {
	//console.log (fastGuyFaster(), slowGuyFaster());
	if (fastGuyFaster() >=900) {
	//console.log ("winner = fastGuyFaster");
	raceOver();
	return (winner = fastGuyFaster);
	}
	else if (slowGuyFaster()>=900) {
	//console.log ("winner = slowGuyFaster");
	return (winner = slowGuyFaster);
	}
	else 
	return;
	}

function raceOver () {
	console.log ("race over");


}
	
 	//replay/reset
		//$('#reset').on('click', function() {
		//	$('.plant').css('left', 0);
		//	$('.info span').text('');
		//});

	//document.addEventListener('click', replayGame);


};