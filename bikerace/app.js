window.onload=function() {

function greet(){//checking local storage to make sure 
	//they havent already seen simplistic isntructions on how to play game.
	var alerted = localStorage.getItem('alerted') || '';
    if (alerted != 'yes') {
     alert("Let's Race!\nTap your up & right arrow keys\nto move your cyclist.");
     localStorage.setItem('alerted','yes');
 	}
 }//end of greet function	

greet();//calling greet

// checking that JS file is attached to HTML 
console.log("Javascript is working!");

	var margin = 0;
	var slowCyclist = document.getElementById("slowCyclist");
	var fastCyclist = document.getElementById("fastCyclist");

	var block = document.getElementById("racers").style.display ='block';

	document.addEventListener('keydown', function() {
	//adding the event listener to functions at Global level.
     moveCyclist();
     detectWinner();
	});


	//Moving the Cyclists with Keyfunctions
	function moveCyclist(e) {
	
			e = e || window.event;
			if (e.keyCode == '38') { //up arrow
		    slowGuy();	 
			console.log("up arrow");
		    }
		    else if (e.keyCode == '39') { //right arrow
		    fastGuy();
		    console.log("right arrow");
			}
	}

	function slowGuy() {//resetting slowguys left margin which controls his advancement across screen
		margin = margin+20;
		margin ++;//right arrow
		document.getElementById("slowCyclist").style.marginLeft = margin + "px";
		//console.log (slowguy);
		return margin;
	}

	function fastGuy() {//resetting fastguys left margin which controls his advancement across screen
		margin = margin+20;
		margin ++;//right arrow
		document.getElementById("fastCyclist").style.marginLeft = margin + "px";
		return margin;
	}

	function detectWinner(e) { //comparing fastguy and slowguys margin width, against race canvas size to determine winner.)
		console.log (fastGuy(), slowGuy()); //checkign to make sure i get the uptodate margin values for each.
		if (fastGuy() >= 850) { //checking for winner
		console.log ("winner = the fastGuy");
		raceOver();
		return (winner = fastGuy);//later- to add some sort of scoring
		}

		else if (slowGuy() >= 850) {
		console.log ("winner = slowGuy");
		raceOver();
		return (winner = slowGuy);
		}

		else 
		return;
	}

	function raceOver () {
		console.log ("race over");
        document.getElementById("racers").style.display ='none';
        document.getElementById("winners").style.display ='block';
       	var cheer = new Audio('crowdcheer.wav');
     	cheer.play();
    	cheer.loop = false;
	}
	
 	var myBtn = document.getElementById("myBtn").addEventListener("click", resetRace, false);

 	function resetRace () {
		console.log ("race reset");
		location.reload();

 }

};