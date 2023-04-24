var intervalID;

var co = 0;
var mo = 0;
var ho = 0;



function myCallback() {
    	

    	co = co + 1;

    	if(co != 60){
    	document.getElementById("seg").value = co;
		}

    	if(co == 60){
    	co = 0;
    	document.getElementById("seg").value = co;

    	mo = mo + 1;
    	
    	if(mo != 60){
    	document.getElementById("min").value = mo;
    	}//nuevo
    	
    	if(mo == 60){
    	mo = 0;
    	document.getElementById("min").value = mo;
    	
    	ho = ho + 1;
    	document.getElementById("hor").value = ho;


    	}

    	}


}

function iniciar(){
	if(!intervalID){
	intervalID = setInterval(myCallback, 1000);	
	}
}

function detente(){
	clearInterval(intervalID);
	intervalID = null;
}

function reiniciar(){
	clearInterval(intervalID);
	intervalID = null;
	
	 co = 0;
	 mo = 0;
	 ho = 0;

	document.getElementById("seg").value = "";
	document.getElementById("min").value = "";
	document.getElementById("hor").value = "";		

}


document.getElementById("detener").addEventListener("click", detente);
document.getElementById("inicio").addEventListener("click", iniciar)
document.getElementById("clean").addEventListener("click", reiniciar)