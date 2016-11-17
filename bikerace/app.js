window.onload=function(){
var slowCyclist; 
var fastCyclist;

document.addEventListener('keydown', moveCyclist);

function moveCyclist(evt) {
	switch (evt.keyCode) {
	    case 186:
	    semiColonPressed();
	    break;
	    case 222:
	    singleQuotePressed();
	    break;
	    
	    }
	}

    
function semiColonPressed() {
	console.log("So, you've clicked the semicolon");
    var slowCyclist = document.getElementById('lap1').appendChild(
    document.getElementById('slowCyclist'));
    }

    function singleQuotePressed() {
    console.log("So, you've clicked the singlequote");
    var fastCyclist = document.getElementById("fastCyclist");
    fastCyclist.style.left = parseInt(fastCyclist.style.left) + 5 + 'px';

    }

   
};