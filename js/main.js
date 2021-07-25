function hamburgerToggle(){
	var x = document.getElementById("links");
	if(x.style.display === "inline-block"){
		x.style.display = "none";
	}
	else{
		x.style.display = "inline-block";
	}
}